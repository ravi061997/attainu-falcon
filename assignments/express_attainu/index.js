var express = require('express');
//var bpdyParser = require('body-parser');
var app = express();

//app.use(bodyParser.urlencoded());
app.use(express.static('public'));
 
var students = require('./students');
var instructors = require('./instructors');

app.locals.objectId = require('mongodb').ObjectID;

var mongoClient = require('mongodb').MongoClient;
mongoClient.connect('mongodb://127.0.0.1:27017', {useNewUrlParser: true}, function(err,client){
    if(err) throw err;
    app.locals.db = client.db('attainu');
});
 
app.use('/students' ,students);
app.use('/instructors',instructors);

app.listen(3000);
