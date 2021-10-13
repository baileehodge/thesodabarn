/*TOKENS*/
const ipdataToken = "695d2bd8cf12edc2ed40cb3e7109b857d7d24998f78ae659473c0d79";
// https://ipdata.co/

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

const getLocation = async function() {
  const requestURL = "https://api.ipdata.co?api-key=" + ipdataToken;
  let response = await fetch(requestURL);
  let json = await response.json();
  console.log("User IP data: ", json);
  return {
    city: json.city,
    region: json.region,
    latitude: json.latitude,
    longitude: json.longitude
  };
}

//https://en.wikipedia.org/wiki/Haversine_formula
const distanceFrom = function(here, there) {
  const earthRadius = 3958.8; //miles

  return 2*earthRadius*
  Math.asin(Math.sqrt(
    Math.pow(Math.sin((there.latitude-here.latitude)/2 * Math.PI/180), 2) +
    Math.cos(here.latitude)*Math.cos(there.latitude)*
      Math.pow(Math.sin((there.longitude-here.longitude)/2 * Math.PI/180),2)
  ));
}

const orderByProximity = function(origin, locations) {
  locations.sort(
    (a, b) => {
      return distanceFrom(origin, a) - distanceFrom(origin, b);
    }
  );
  return locations;
}

const orderSodaBarnLocations = function(origin) {
  const orderedLocations = orderByProximity(origin, [chubbuckLocation, pocatelloLocation, burleyLocation]);
  var orderedNames = [];
  for (const loc of orderedLocations) {
    switch(loc) {
      case chubbuckLocation:
        orderedNames.push("Chubbuck");
        break;
      case pocatelloLocation:
        orderedNames.push("Pocatello");
        break;
      case burleyLocation:
        orderedNames.push("Burley");
        break;
      default:
        throw "orderByProximity did not return one of the provided locations! " + loc;
    }
  }
  return orderedNames;
}

getLocation().then(loc => {
  user_location = document.getElementById("user-location");
  user_location.innerHTML = loc.city + ", " + loc.region;
  user_location.href = "https://www.google.com/maps/search/"+loc.latitude+","+loc.longitude;

  var orderedSodaBarns = orderSodaBarnLocations(loc);
  for (let i = 0; i < orderedSodaBarns.length; i++) {
		var locationInfo = document.getElementById(orderedSodaBarns[i]+"-info");
		var locationPos = document.getElementById("location-"+i);
		locationPos.insertBefore(locationInfo, locationPos.childNodes[0]);
	}
});