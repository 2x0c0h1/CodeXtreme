var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next){
	res.render('index', {isAuthenticated: true});
});

router.get('/profile', (req, res) => {
  res.render('pages/profile', {isAuthenticated: true});
});

// function ensureAuthenticated(req, res, next) {
// 	if (req.isAuthenticated()) {
// 		return next();
// 	}
// 	res.redirect('/login');
// };

module.exports = router;
