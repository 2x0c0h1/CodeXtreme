var exports = module.exports;

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

exports.login = function(email, password){
  collection.find({email: email, password: password}).toArray((err, items) => {
    console.log(items);
  });
};
