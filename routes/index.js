// routes/index.js - one route for each page of the portfolio.
// Each route answers a GET request and renders an EJS view with res.render(view, locals).
// "active" tells the navigation bar which link to highlight.
var express = require('express');
var router = express.Router();

// Home page
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Home', active: 'home' });
});

// About Me page
router.get('/about', function (req, res, next) {
  res.render('about', { title: 'About Me', active: 'about' });
});

// Projects page
router.get('/projects', function (req, res, next) {
  res.render('projects', { title: 'Projects', active: 'projects' });
});

// Contact Me page
router.get('/contact', function (req, res, next) {
  res.render('contact', { title: 'Contact Me', active: 'contact' });
});

module.exports = router;
