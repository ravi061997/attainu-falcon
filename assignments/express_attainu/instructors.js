var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
    var db = req.app.locals.db;
    db.collection('instructors').find().toArray(function(err,result){
        if(err) throw err;
        res.json(result);

    });
});

router.get('/*',function(req,res){
    res.status(404).send("Not found");
});

module.exports = router;