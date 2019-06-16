var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
    de.collection('students').find().toArray(function(err,result){
        if(err) throw err;
        res.json(result);

    });
});
router.get('/add',function(req,reqs){
    res.send("Add route");
});

router.delete('/delete', function(req,res){
    res.redirect('/');
});

router.get('/*',function(req,res){
    res.status(404).send("Not found");
});

module.exports = router;
