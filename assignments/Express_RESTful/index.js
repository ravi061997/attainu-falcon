var express = require('express');
var bodyParser = express('body-parser');

var app = express();

app.use(bodyParser.json());

app.post('/add', function(req, res){
   console.log(req.body.num1);
   res.json({
       "num1":req.body.num1,
       "num2":req.body.num2,
       "result":parseFloat(req.body.num1) + parseFloat(req.body.num2)
   });
})

app.post('/subtract', function(req, res) {
    console.log(req.body.num1);
    res.json({
        "num1":req.body.num1,
        "num2":req.body.num2,
        "result":parseFloat(req.body.num1) - parseFloat(req.body.num2)
    });
})

 app.post('/multiply', function(req, res) {
    console.log(req.body.num1);
    res.json({
        "num1":req.body.num1,
        "num2":req.body.num2,
        "result":parseFloat(req.body.num1)* parseFloat(req.body.num2)
    });
 })

 app.post('/div', function(req, res) {
    console.log(req.body.num1);
    res.json({
        "num1":req.body.num1,
        "num2":req.body.num2,
        "result":parseFloat(req.body.num1) / parseFloat(req.body.num2)
    });
 })

 app.post('/power', function(req, res){
    res.json({
        "base":req.body.base,
        "exp":req.body.exp,
        "result":Math.pow(parseFloat(req.body.base) ,parseFloat(req.body.exp))
    });
 })

app.listen(3000);