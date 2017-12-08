"use strict";

//var io = require('/socket.io/socket.io.js');

var socket = io();

socket.emit("login", {msg: "HEJ FRÅN CLIENT"});

socket.on('welcome', function(data) {
    console.log(data.message);


});


socket.on('issue', function(data) {
    console.log("issue recieved");
    console.log("data " + data);
    /*
    var list = document.getElementsByClassName("issueList");
    console.log("list " + list);
    var li = document.createElement("li");
    var p = document.createElement("p");
    p.innerHTML = data.title;
    li.appendChild(p);
    var p2 = document.createElement("p");
    p2.innerHTML = data.body;
    li.appendChild(p2);
    list[0].appendChild(li);
    console.log("list 2      " + list);
*/
    /*
    var link = document.createElement("a");
    link.innerHTML = "Link to GitHub";
    link.setAttribute("href", data.link);
    li.appendChild(link);
    li.appendChild(document.createElement("p").innerHTML = data.numberOfComments);
    li.appendChild(document.createElement("p").innerHTML = data.createdAt);
    li.appendChild(document.createElement("p").innerHTML = data.updatedAt);
    li.appendChild(document.createElement("p").innerHTML = data.author);
    list.appendChild(li);
    */
    //res.render("index", {title: "GitHub issues", data});
});

/*
 data

 var data = [{title: "Issue two", body: "This is the issue content", link:"github.com", numberOfComments:"23", createdAt: new Date(), updatedAt: new Date(), author: "JOHAN"},
 {title: "Issue two", body: "This is the issue content", link:"github.com", numberOfComments:"23", createdAt: new Date(), updatedAt: new Date(), author: "JOHAN"}];
 */