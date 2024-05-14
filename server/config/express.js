var express = require('express'),
    bodyParser = require('body-parser');
    consign = require('consign');
    cors = require('cors');
    path = require('path');

var app = express();

// Adding middlewares to the application
app.use(bodyParser.urlencoded({ extended : true }))
app.use(bodyParser.json());
app.use(cors());

app.set('secret', 'api-nodejs');

consign() // Automatically including files using consign
    .include('config/database.js')
    .then('app/routes') 
    .then('app/controllers') 
    .into(app); // Injecting into the application

module.exports = app;