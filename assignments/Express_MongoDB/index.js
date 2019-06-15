var express = require('express');
var bodyParser = require('body-parser');

var mongoClient = require('mongodb').MongoClient;
var db;

mongoClient.connect('mongodb://127.0.0.1:27017', {useNewUrlParser: true}, function(err,client){
    if(err) throw err;
    db = client.db('twitter');
})

var app = express();

app.use(bodyParser.urlencoded());
app.use(express.static('public'));

app.get('/getTweets', function(req,res){
    db.collection('tweets').find().toArray(function(err , result){
        res.json(result);
    })
});

app.post('/',function(req,res){
    console.log(req.body);
    db.collection('tweets').insertOne(req.body,function(err,result){
       console.log("was inserted as a new document into twitter.tweets");
       res.redirect('/');
   })
});

app.delete('/deleteTweet', function(req,res){
    console.log(req.body);
    db.collection('tweets').deleteOne(req.body,function(err,result){
        if(err) throw err;
        else
            console.log("was deleted from   twitter.tweets");  
    });
    res.json({deleted: "done"});
})
app.listen(3000);