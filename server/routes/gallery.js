var express = require('express');
var router = express.Router();

router.get ('/', function (req, res){
    res.sendStatus(200);
})

// var pool = require('../modules/pool');

module.exports = router;
