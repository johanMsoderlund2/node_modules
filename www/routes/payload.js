"use strict";
 
var express = require('express');
var router = express.Router();
var rp = require('request-promise');


router.route('/')
    .get(function(req, res, next) {
        console.log("MÅSTE ROUTA GET");
        //res.render('garden', {auth: req.session.auth, csrfToken: req.csrfToken(), title: "Greenhouse"} );
    })
    .post(function(req, res, next) {
        console.log("MÅSTE ROUTA");
        console.log(req);
console.log("\nres **********************\n");
	console.log(res);

	var notifications = JSON.stringify(req);
	var issues = ["Fake", "fake2"];
        res.render('', {title: "GitHub issues", issues, title2:"List of notifications", notifications});
    });




module.exports = router;
