  var express = require('express');
var bodyParser = require('body-parser');
<<<<<<< HEAD:assignments/shallow-dive/Express_Session/index.js
var session = require('express-session');
var db = require('./data/students.json');

var app = express();
var port = 8080;
=======
var session = require('express-session'); 
var db = require('.data/students.json');

var app = express();  
var port = 3000;
>>>>>>> eedf794ac3f9a99646fd8fba18895e6e42964959:assignments/Express_Session/index.js

app.use(session({
    secret:"Express Session Secret"    
}));
app.use(bodyParser.urlencoded());

app.use(function(req, res, next){
    console.log( req.method + " " +req.protocol + "://" +req.hostname + ":"  + port + req.originalUrl);
    console.log("Session ID:" + req.session.id);

});

app.get('/test',function(req,res){
    if(req.session.counter==undefined) {
        req.session.counter = 1;
        res.send("You welcome this page for the first time");
    }
    else {
        req.session.counter++;
        res.send("You visited this page" + req.session.counter+ "times");
    }
});

app.get('/login', function( req , res ) {
    res.sendfile('public/index.html');
})

app.post('/auth', function( req,res){
    for(i=0; i<db.length; i++) {
        
        if(req.body.email=== db[i].email && req.body.password === db[i].password) {
            req.session.login = true;
            req.session.studentName = db[i].name;
          
        }
    }
    res.redirect('/user');
});
app.get('/user' , function(req ,res ){
    if(req.session.login == true) {
        res.send("Welcome" + req.session.studentName + "do you wnat to +<a href ='/logout' >logout</a>");
    }
    else {
        res.send("  you are blocked :(");
    }
});
app.get('/logout' , function(req ,res ){
    req.session.destroy();
    res.redirect('/login');
});

app.listen(port);