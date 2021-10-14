/*API TOKENS*/
// https://ipdata.co/
const ipdataToken = "695d2bd8cf12edc2ed40cb3e7109b857d7d24998f78ae659473c0d79";
// https://openweathermap.org/api/geocoding-api
const openweatherToken = "88df0722cf74cad517e53e7081aa024a";
// https://cors-anywhere.herokuapp.com/
//no token necessary

/*LOCATIONS*/
const chubbuckLocation = {
  latitude: 42.9201927,
  longitude: -112.4602732
}
const pocatelloLocation = {
  latitude: 42.8623252,
  longitude: -112.4404646
}
const burleyLocation = {
  latitude: 42.5366689,
  longitude: -113.7731558
}

/* API FETCH METHODS */
const CORSproxy = function(requestURL) {
  return "https://cors-anywhere.herokuapp.com/" + requestURL;
}

const fetchJSON = async function(requestURL) {
  let response = await fetch(requestURL);
  let json = await response.json();
  return json;
}

const fetchIPData = async function() {
  const requestURL = "https://api.ipdata.co?api-key=" + ipdataToken;
  let json = await fetchJSON(requestURL);
  console.log("User IP data: ", json);
  return json;
}

const fetchBrowserGeolocationData = async function() {
  let browserGeolocation = new Promise((resolve, reject) => {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(resolve, reject, {maximumAge: 0})
    else
      reject("Could not fetch browser location data: Geolocation is not supported");
  });
  let json = await browserGeolocation;
  console.log("User browser geolocation info: ", json);
  return json;
}

const fetchLocationNameData = async function(coords) {
  const requestURL = "https://api.openweathermap.org/geo/1.0/reverse?" +
    "lat=" + coords.latitude + 
    "&lon=" + coords.longitude +
    //"&limit={limit}" +
    "&appid="+openweatherToken;
  let json = await fetchJSON(requestURL);
  console.log("Location name data: ", json);
  return json;
}

/* LOCATION DETECTION */
const getLocationByIPAddress = async function() {
  let ipData = await fetchIPData();
  return {
    city: ipData.city,
    region: ipData.region,
    latitude: ipData.latitude,
    longitude: ipData.longitude
  };
}

const getLocationFromBrowser = async function() {
  try {
    let geolocData = await fetchBrowserGeolocationData();
    let locNameData = await fetchLocationNameData(geolocData.coords);

    return {
      city: locNameData[0].name,
      region: locNameData[0].state,
      latitude: geolocData.coords.latitude,
      longitude: geolocData.coords.longitude
    };
  } catch (err) {
    console.error("Could not get location from the browser: ", err);
    return undefined;
  }
}

const getBestLocation = async function() {
  let loc = await getLocationFromBrowser();
  if (loc === undefined) {
    loc = await getLocationByIPAddress();
  }
  return loc;
}

/* CALCULATION METHODS */
const distanceFrom = function(here, there) {
  const earthRadius = 3958.8; //miles

  //https://en.wikipedia.org/wiki/Haversine_formula
  return 2*earthRadius*
  Math.asin(Math.sqrt(
    Math.pow(Math.sin((there.latitude-here.latitude)/2 * Math.PI/180), 2) +
    Math.cos(here.latitude)*Math.cos(there.latitude)*
      Math.pow(Math.sin((there.longitude-here.longitude)/2 * Math.PI/180),2)
  ));
}

const sortByProximity = function(origin, locations) {
  locations.sort((a, b) => {
      return distanceFrom(origin, a) - distanceFrom(origin, b);
  });
  return locations;
}

const sortSodaBarnLocations = function(origin) {
  const sortedLocations = sortByProximity(origin, [chubbuckLocation, pocatelloLocation, burleyLocation]);
  var sortedNames = [];
  for (const loc of sortedLocations) {
    switch(loc) {
      case chubbuckLocation:
        sortedNames.push("Chubbuck");
        break;
      case pocatelloLocation:
        sortedNames.push("Pocatello");
        break;
      case burleyLocation:
        sortedNames.push("Burley");
        break;
      default:
        throw "sortByProximity did not return one of the provided locations! " + loc;
    }
  }
  return sortedNames;
}

/* THE ACTION */
getBestLocation().then(loc => {
  user_location = document.getElementById("user-location");
  user_location.innerHTML = loc.city + ", " + loc.region;
  user_location.href = "https://www.google.com/maps/search/"+loc.latitude+","+loc.longitude;

  var sortedSodaBarns = sortSodaBarnLocations(loc);
  for (let i = 0; i < sortedSodaBarns.length; i++) {
		var locationInfo = document.getElementById(sortedSodaBarns[i]+"-info");
		var locationPos = document.getElementById("location-"+i);
		locationPos.insertBefore(locationInfo, locationPos.childNodes[0]);
	}
});