const express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
const app = express();
var database = require('./routes/database.js');

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.use('/', express.static('./public'));

app.get('/', (req, res) => {
	res.render('pages/index', {
		isAuthenticated: req.session.loggedin
	});
});

app.get('/login', (req, res) => {
	res.render('pages/login', {
		isAuthenticated: req.session.loggedin
	});
});

app.post('/auth', (req, res) => {
	var email = req.body.email;
	var password = req.body.password;
	var usertype = req.body.usertype;
	if (email && password && usertype == "nomad") {
		database.nomadlogin((err, results) => {
			if (results.length > 0) {
				req.session.loggedin = true;
				req.session.email = email;
        req.session.usertype = usertype;
				res.redirect('/profile');
			} else {
				res.send('Incorrect Email and/or Password!');
			}
			res.end();
		}, email, password);
	} else if (email && password && usertype == "company") {
		database.companylogin((err, results) => {
			if (results.length > 0) {
				req.session.loggedin = true;
				req.session.email = email;
        req.session.usertype = usertype;
				res.redirect('/profile');
			} else {
				res.send('Incorrect Email and/or Password!');
			}
			res.end();
		}, email, password);
	} else {
		res.send('Please enter Email and Password!');
		res.end();
	}
});

var routes = require('./routes/index');

app.use('/', routes);

app.listen(8080, () => console.log("Listening on port 8080!"));
