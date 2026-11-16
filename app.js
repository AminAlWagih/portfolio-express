// app.js - creates the Express application and wires everything together.
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// The router that holds all of the page routes (see routes/index.js)
var indexRouter = require('./routes/index');

var app = express();

// View engine setup: EJS templates are read from the "views" folder
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));                                // logs each request in the terminal
app.use(express.json());                               // reads JSON request bodies
app.use(express.urlencoded({ extended: false }));      // reads HTML form bodies
app.use(cookieParser());
// Everything in "public" (CSS, JavaScript, images, video) is served as-is.
// "public" is part of the path, so /images/profile.jpg is public/images/profile.jpg
app.use(express.static(path.join(__dirname, 'public')));

// Send all page URLs to the router
app.use('/', indexRouter);

// If no route matched, create a 404 error and pass it on
app.use(function (req, res, next) {
  next(createError(404));
});

// Error handler: renders views/error.ejs
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  // only show the full error details while developing
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error', { title: 'Error', active: '' });
});

module.exports = app;
