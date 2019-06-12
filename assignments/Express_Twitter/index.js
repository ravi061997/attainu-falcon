var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var twitt = [
    {
        name: "digitizer",
        tweet: "This is a cool piece of information."
    },
    {
        name: "M0SH",
        tweet: "@digitizer I agree."
    }
];
app.use(bodyParser.urlencoded());

 app.use(express.static('/public'));
app.get('/getTwitters' , function(req , res) {
    res.json('twitters');
});

app.post('/' , function(req,res){
    console.log(req.body); 
    twitts.push(req,body);
    res.redirect('/')
})

app.listen(3000);