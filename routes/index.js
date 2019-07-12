var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next){
	res.render('index', {isAuthenticated: true});
});

router.get('/profile', (req, res) => {
  res.render('pages/profile', {isAuthenticated: true});
});

<<<<<<< HEAD
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
});

=======
>>>>>>> 55cb7c4c3abe4ee2504832f0893976a70e75edcb
// function ensureAuthenticated(req, res, next) {
// 	if (req.isAuthenticated()) {
// 		return next();
// 	}
// 	res.redirect('/login');
// };

module.exports = router;
