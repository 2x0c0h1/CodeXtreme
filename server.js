const express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
const app = express();
//var database = require('./database.js');

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.use('/', express.static('./public'));

app.get('/', (req, res) => {
  res.render('pages/index', {isAuthenticated: true});
});

app.get('/login', (req, res) => {
  res.render('pages/login', {isAuthenticated: true});
});

app.post('/auth', (req, res) => {
	var email = req.body.email;
	var password = req.body.password;
	if (email && password) {
		connection.query('SELECT * FROM accounts WHERE email = ? AND password = ?', [email, password], (error, results, fields) => {
			if (results.length > 0) {
				req.session.loggedin = true;
				req.session.email = email;
				res.redirect('/profile');
			} else {
				res.send('Incorrect Email and/or Password!');
			}
			res.end();
		});
	} else {
		res.send('Please enter Email and Password!');
		res.end();
	}
});

var routes = require('./routes/index');

app.use('/', routes);

app.listen(8080, () => console.log("Listening on port 8080!"));
