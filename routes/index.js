var express = require('express');
var router = express.Router();

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
