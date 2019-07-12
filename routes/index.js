var express = require('express');
var router = express.Router();
var CompanyUser = require('../lib/CompanyUser');
//var NomadUser = require('../lib/NomadUser');

router.get('/', function(req,res,next){
	res.render('index', {title:'Express'});
});

router.post('/comregister', function(req,res){
	var username=req.body.username;
	var password=req.body.password;
	var name=req.body.name;
	
	var newcom=new CompanyUser();
	newcom.username=username;
	newcom.password=password;
	newcom.name=name;
	newcom.save(function(err,savedCom){
		if(err){
			console.log(err);
			return res.status(500).send();
		}
		return res.status(200).send();
});

router.get('/profile'/*, ensureAuthenticated*/, function(req,res){
	res.render('profile'/*, {user: req.user.name}*/);
});

// function ensureAuthenticated(req, res, next) {
// 	if (req.isAuthenticated()) {
// 		return next();
// 	}
// 	res.redirect('/login');
// };

module.exports = router;
