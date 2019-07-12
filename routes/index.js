var express = require('express');
var router = express.Router();
var database = require('./database.js');

router.get('/', function(req,res,next){
	res.render('index', {isAuthenticated: req.session.loggedin});
});

router.get('/profile', (req, res) => {
  if (req.session.loggedin) {
		database.getProfile( (err, results) => {
			res.render('pages/profile', {isAuthenticated: req.session.loggedin, user: results});
      res.end();
    }, req.session.email);
	} else {
		res.send('Please login to view this page!');
		res.end();
	}
});

router.get('/projlist', (req, res) => {
  if (req.session.loggedin) {
    res.render('pages/projlist', {isAuthenticated: req.session.loggedin});
  } else {
		res.send('Please login to view this page!');
	}
});

module.exports = router;
