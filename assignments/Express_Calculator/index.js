var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 3000;
app.use(bodyParser.json());

app.get('/add' ,function (req,res){
    console.log(req.body.num1);
    res.json ({
        "num1":req.body.num1,
        "num2":req.body.num2,
        "result": parseFloat(req.body.num1)+parseFloat(req.body.num2)
    });
})
app.get('/sub' ,function (req,res){
    console.log(req.body.num1);
    res.json ({
        "num1":req.body.num1,
        "num2":req.body.num2,
        "result": parseFloat(req.body.num1)-parseFloat(req.body.num2)
    });
})

app.get('/mutiply' ,function (req,res){
    console.log(req.body.num1);
    res.json ({
        "num1":req.body.num1,
        "num2":req.body.num2,
        "result": parseFloat(req.body.num1)*parseFloat(req.body.num2)
    });
})



app.listen(port);
