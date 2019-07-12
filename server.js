const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use('/', express.static('./public'));

app.get('/', (req, res) => {
  res.render('pages/index', {isAuthenticated: true});
});

app.get('/login', (req, res) => {
  res.render('pages/login', {isAuthenticated: true});
});

app.get('/profile', (req, res) => {
  res.render('pages/profile', {isAuthenticated: true});
});

var routes = require('./routes/index');

app.use('/', routes);

// function ensureAuthenticated(req, res, next) {
//   if (req.isAuthenticated()) { return next(); }
//   res.redirect('/login');
// };

app.listen(8080, () => console.log("Listening on port 8080!"));
