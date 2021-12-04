const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/museum', {
  useNewUrlParser: true
});

// Get a list of all of the items in the museum.
let mock = require('./cookie-data.json').cookies;
app.get('/api/cookies', async (req, res) => {
  try {
    //let items = await Item.find();
    //res.send(items);
    res.send(mock);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});


app.listen(3000, () => console.log('Server listening on port 3000!'));
