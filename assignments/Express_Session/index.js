var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();

app.use(session({
    secret:"This is my secret"
}));


app.use(bodyParser.urlencoded());

app.get('/', function( req , res ) {
    if (req.session.page_views) {
        req.session.page_views++;
        res.send("you visited this page"+req.session.page_views + "times");
    }
    else {
        req.session.page_views = 1;
        res.send("Welcome to this page for first time");
    }
})

app.listen(3000);