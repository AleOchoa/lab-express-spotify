require('dotenv').config();

const express = require('express');
const hbs = require('hbs');
const bodyParser=require('body-parser')


// require spotify-web-api-node package here:

const app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}))
// setting the spotify-api goes here:

// Our routes go here:
let index = require('./routes/index.js')
app.use("/", index)

app.listen(3000, () => console.log('My Spotify project running on port 3000 🎧 🥁 🎸 🔊'));
