var express = require('express');
var router = express.Router();

// router.get('/',function(req,res){
//     res.send("Get route");
// })

router.get('/', function(req,res){
    var db = req.app.locals.db;
    db.collection('students').find().toArray(function(error,result){
        if(error) throw err;
        var router = express.Router();
        res.json(result);
    });
});
router.get('/add',function(req,reqs){
    res.send("Add route");
});

router.delete('/delete', function(req,res){
    var db = req.app.locals.db;
    db.collection('students').deleteOne({"_id":req.app.locals.objectId("5d069afa6f849509b6c63e63")},function(error,result){
        if(error) throw err;
        var router = express.Router();
        res.send("Document Deleted");
    });
});

router.get('/*',function(req,res){
    res.status(404).send("Not found");
});

module.exports = router;
