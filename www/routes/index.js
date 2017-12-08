"use strict";

var express = require('express');
var router = express.Router();
var rp = require('request-promise');

/* GET home page. */
router.get('/', function(req, res, next) {

    /*
    * Check if hook data is available
    */






    var options = {
        secure: true,
        //httpOnly: true,
        uri: 'https://api.github.com/repos/1dv023/js223zs-examination-3/issues',
        secret: 'testarhamlig',

        headers: {
            Authorization: 'token 235994889015492905a3cc18e2e318de797bc748',
            'User-Agent': 'Request-Promise'
        },
        json: true // Automatically parses the JSON string in the response
    };
    rp(options)
        .then(function (issues) {
            console.log("INDEX GET RP");
       //     res.render('index', {title: "GitHub issues", issues, title2:"List of notifications"});
        next();
	})
        .catch(function (err) {
            // API call failed...
            next(err);
        });
});

/* GET home page. */
router.post('/', function(req, res, next) {
    console.log("INDEX POST");
//    res.render('index', {title: "GitHub issues", [], title2:"List of notifications", req});
next();
});



/*
* Get one specific thread from github
*/
//router.get('$id', function(req, res, next) {
/*
//uri: 'https://api.github.com/repos/1dv023/js223zs-examination-3/issues/6/comments',
    next();
    });


// Edit one specific thread on github

router.post($id, function(req, res, next) {
    
    
    next();
    });
    */

module.exports = router;


