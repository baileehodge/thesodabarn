const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/thesodabarn', {
  useNewUrlParser: true
});

// Create a scheme for cookies: a title, a price, and a path to an image.
const cookieSchema = new mongoose.Schema({
  name: String,
  price: String,
  image: String,
});
// Create a model for the cookies
const Cookie = mongoose.model('Cookie', cookieSchema);

//preload cookie database if it's empty
Cookie.find().then(cookies => {
  if (cookies.length != 0) return;
  let mock = require('./cookie-data.json').cookies;
  for (c of mock) {
    const cookie = new Cookie({
      name: c.name,
      price: c.price,
      image: c.image
    });
    cookie.save();
  }
});

app.get('/api/cookies', async (req, res) => {
  try {
    let cookies = await Cookie.find();
    res.send(cookies);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});


app.listen(3000, () => console.log('Server listening on port 3000!'));
