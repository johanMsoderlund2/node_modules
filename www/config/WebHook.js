"use strict";
var rp = require('request-promise');

var createHook = function() {
/*
    var options = {
        secure: true,
        //httpOnly: true,
        uri: 'https://api.github.com/repos/1dv023/js223zs-examination-3/hooks',
        secret: 'testarhamlig',

        headers: {
            Authorization: 'token 235994889015492905a3cc18e2e318de797bc748',
            'User-Agent': 'Request-Promise'
        },
        json: true // Automatically parses the JSON string in the response
    };

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

    var options = {
        "method": "POST",
        "uri": 'https://api.github.com/repos/1dv023/js223zs-examination-3/hooks',
        "secure": true,
        "secret": "hamligNyckel",
        "name": "web",
        "active": true,
        "events": [
            "issues"
            //"notifications"
        ],
        "config": {
            //"Authorization": 'token 235994889015492905a3cc18e2e318de797bc748',
            "url": "http://localhost:8000/235994889015492905a3cc18e2e318de797bc748",
            "content_type": "json"
        },
        "headers": {
            "Authorization": 'token 235994889015492905a3cc18e2e318de797bc748',
            'User-Agent': 'Request-Promise'
        }
    }

    var options = {
        method: "POST",
        uri: 'https://api.github.com/repos/1dv023/js223zs-examination-3/hooks',
        secure: true,
        name: "web",
        active: true,
        //"notifications"
        events: ["issues"],
        config: {
            insecure_ssl: "1",
            Authorization: 'token 235994889015492905a3cc18e2e318de797bc748',
            url: "http://localhost:8000/",
            content_type: "json",
            secret: "hamligNyckel",
        },
        headers: {
            Authorization: 'token 235994889015492905a3cc18e2e318de797bc748',
            'User-Agent': 'Request-Promise'
        }
    }
*/
    var options = {
        method: "POST",
        uri: 'https://api.github.com/repos/1dv023/js223zs-examination-3/hooks',
        secure: true,
        json: true,
        //"notifications"
        body: {
            name: "web",
            active: true,
            events: ["issues"],
            config: {
                insecure_ssl: "1",
                Authorization: 'token 235994889015492905a3cc18e2e318de797bc748',
                url: "https://localhost:8000/",
                content_type: "json",
                secret: "hamligNyckel",
            },
        },
        headers: {
            Accept: "application/vnd.github.v3+json",
            Authorization: 'token 235994889015492905a3cc18e2e318de797bc748',
            'User-Agent': 'Request-Promise'
        }
    }



    rp(options)
        .then(function (response) {
            console.log("response           " + response);

        })
        .catch(function (err) {
            console.log("ERRORRRRRRRRRRRRRRRRRRRRRRRRRR           " + err);
            //console.error(err);
        });

}

module.exports = createHook;
