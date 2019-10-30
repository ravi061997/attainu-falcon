var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.get('/add/:a/:b' , function(req,res){
    console.log(req.params.a)
    var a = parseInt(req.params.a);
    var b = parseInt(req.params.b);
    res.json({
        "a":a,
        "b":b, 
        "result":(a+b)
    });
})

app.get('/subract/:a/:b' , function(req,res){
    console.log(req.params.a);
    var a = parseInt(req.params.a);
    var b = parseInt(req.params.b);
    res.json({
        "a":a,
        "b":b, 
        "result":(a-b)});
})

app.get('/multiply/:a/:b' , function(req,res){
    console.log(req.params.a);
    var a = parseInt(req.params.a);
    var b = parseInt(req.params.b);
    res.json({
        "a":a,
        "b":b, 
        "result":(a*b)});
})

app.get('/div/:a/:b' , function(req,res){
    console.log(req.params.a);
    var a = parseInt(req.params.a);
    var b= parseInt(req.params.b);
    res.json({
        "a":a,
        "b":b, 
        "result":(a-b)});
})

app.listen(3000);