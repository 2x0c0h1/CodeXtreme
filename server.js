const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use('/', express.static('./public'));

app.get('/', (req, res) => {
  res.render('pages/index');
});

app.get('/login', (req, res) => {
  res.render('pages/login');
});

var routes = require('./routes/index');

app.use('/', routes);

// function ensureAuthenticated(req, res, next) {
//   if (req.isAuthenticated()) { return next(); }
//   res.redirect('/login');
// };

const MongoClient = require('mongodb').MongoClient;
const ObjectId = require("mongodb").ObjectID;
const BodyParser = require("body-parser");
const CONNECTION_URL  = "mongodb+srv://admin:admin@cluster0-qkndc.mongodb.net/test?retryWrites=true&w=majority";
const DATABASE_NAME = "Outsourced";


app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

var database, collection;
MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
    if(error) {
        throw error;
    }
    database = client.db(DATABASE_NAME);
    collection = database.collection("CompanyUsers");

    console.log("Connected to `" + DATABASE_NAME + "`!");
});
app.listen(8080, () => console.log("Listening on port 8080!"));


//
// var router = express.Router();
// var CompanyUser = require('./lib/CompanyUser.js');
// //var NomadUser = require('../lib/NomadUser');
//
// router.get('/', function(req,res,next){
// 	res.render('index', {title:'Express'});
// });
//
// router.post('/comregister', function(req,res){
// 	var username=req.body.username;
// 	var password=req.body.password;
// 	var name=req.body.name;
//
// 	var newcom=new CompanyUser();
// 	newcom.username=username;
// 	newcom.password=password;
// 	newcom.name=name;
// 	newcom.save(function(err,savedCom){
// 		if(err){
// 			console.log(err);
// 			return res.status(500).send();
// 		}
// 		return res.status(200).send();
// 	});
// });
//
//
//
//
