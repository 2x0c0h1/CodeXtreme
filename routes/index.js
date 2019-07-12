var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next){
	res.render('index', {isAuthenticated: true});
});

router.get('/profile', (req, res) => {
  if (request.session.loggedin) {
    res.render('pages/profile', {isAuthenticated: true, username: req.session.username});
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});

router.get('/projlist', (req, res) => {
  if (request.session.loggedin) {
    res.render('pages/projlist', {isAuthenticated: true});
  } else {
		response.send('Please login to view this page!');
	}
});

module.exports = router;
