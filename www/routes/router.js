/**
 * Created by Johan on 2017-03-01.
 */
"use strict";

var express = require('express');
var index = require('./index');
var payload = require('./payload');

var csrf = require('csurf');

var csrfProtection = csrf({ cookie: false });
var router = express.Router();


router.use('/', index);
router.use('/payload', payload);




/*
router.get('/payload', function(req, res, next) {
    
       next();     
    });
    
router.     post('/payload', function(req, res, next) {


    console.log("req:    \n" );
    console.log(req);
    console.log("\n\nreq:    " );
    console.log(res);
    next();
});

*/

module.exports = router;
