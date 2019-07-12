var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next){
	res.render('index', {isAuthenticated: req.session.loggedin});
});

router.get('/profile', (req, res) => {
  if (req.session.loggedin) {
    res.render('pages/profile', {isAuthenticated: req.session.loggedin, username: req.session.username});
	} else {
		res.send('Please login to view this page!');
	}
	res.end();
});

router.get('/projlist', (req, res) => {
  if (req.session.loggedin) {
    res.render('pages/projlist', {isAuthenticated: req.session.loggedin});
  } else {
		res.send('Please login to view this page!');
	}
});

module.exports = router;
