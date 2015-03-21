#!/bin/env/node

var express = require("express");
var fs      = require("fs");

function initializeEnvironment() {
    
    ipaddress   = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
    port        = process.env.OPENSHIFT_NODEJS_PORT || 8080;
}

function initializeCache() {

    cache = {};

    cache["index.html"] = fs.readFileSync("./index.html");
}

function initializeRoutes() {

    routes = {};

    routes["/"] = function(req, res) {
        
        res.setHeader("Content-Type", "text/html");
        res.send("for the love of..."+cache["index.html"]);
    };
}

function initializeServer() {

    app = express();
    
    for(var r in routes) {
        
        app.get(r, routes[r]);
    }
}

function initialize() {

    initializeEnvironment();
    initializeCache();
    initializeRoutes();
    initializeServer();
}

function start() {

    app.listen(port, ipaddress, function() {
            
        console.log("%s: Node server started on %s:%d", Date(Date.now()), ipaddress, port);
    });
}

module.exports = {

    initialize: initialize,
    start:      start
};
