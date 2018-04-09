/**
 * Program entry point
 */
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var http = require('http');
var url = require('url');
var router = express.Router();

// var db = require('./db/dbconnection');
// var testdbinit = require('./db/testdbinit');

var app = express();
app.use(express.static('public'));

//Routes
app.use(require('./ticketRoutes'));
// app.use(require('./taskRoutes'));

// testdbinit.initDB();

if (!module.parent) {
  http.createServer(app).listen(3000, function () {
    console.log('Express server listening on port 3000');
  });
}

/**
 * Export the Express app so that it can be used by Chai
*/
module.exports = app;