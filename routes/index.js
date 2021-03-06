var express = require('express');
var router = express.Router();
var database = require('./database.js');

router.get('/', function(req,res,next){
	res.render('index', {isAuthenticated: req.session.loggedin, type: req.session.usertype});
});

router.get('/payment', function(req,res,next){
	res.render('pages/payment', {isAuthenticated: req.session.loggedin, type: req.session.usertype});
});

router.get('/profile', (req, res) => {
  if (req.session.loggedin && req.session.usertype == "nomad") {
		database.getProfile((err, profile) => {
      database.getSkills((err, skills) => {
        database.getNomadProjects((err, projects) => {
            res.render('pages/profile', {isAuthenticated: req.session.loggedin, user: profile, skills: skills, projects: projects, type: req.session.usertype});
        }, profile[0].id);
      }, profile[0].id);
    }, req.session.email, req.session.usertype);
	} else {
		res.send('Please login to view this page!');
		res.end();
	}
});

router.get('/dashboard', (req, res) => {
	if (req.session.loggedin && req.session.usertype == "company") {
		database.getProfile( (err, results) => {
      database.getCompanyProjects((err, projects) => {
        res.render('pages/companypriv', {isAuthenticated: req.session.loggedin, user: results, projects: projects, type: req.session.usertype});
      }, results[0].id)
		}, req.session.email, 'company');
	} else {
		res.send('Please login to view this page!');
		res.end();
	}
});

router.get('/nomad/:id', (req, res) => {
  var id = parseInt(req.params.id);
  database.getProfile((err, profile) => {
    database.getSkills((err, skills) => {
      database.getNomadProjects((err, projects) => {
          res.render('pages/profile', {isAuthenticated: req.session.loggedin, user: profile, skills: skills, projects: projects, type: req.session.usertype});
      }, id);
    }, id);
  }, id, 'nomad');
});

router.get('/company/:id', (req, res) => {
  var id = parseInt(req.params.id);
  database.getProfile((err, user) => {
    database.getCompanyProjects((err, projects) => {
      res.render('pages/company', {isAuthenticated: req.session.loggedin, user: user, projects: projects, type: req.session.usertype});
    }, id)
  }, id, 'company');
});

router.get('/projects', (req, res) => {
  if (req.session.loggedin) {
    database.getProjects((err, projects) => {
      res.render('pages/projects', {isAuthenticated: req.session.loggedin, projects: projects, type: req.session.usertype});
    });
  } else {
		res.send('Please login to view this page!');
	}
});



module.exports = router;
