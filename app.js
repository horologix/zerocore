var express = require("express");
var fs      = require("fs");
var api     = require("./api_chain");

function initializeEnvironment() {
    
    ipaddress   = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
    port        = process.env.OPENSHIFT_NODEJS_PORT || 8080;
}

function initializeCache() {

    cache = {};

    cache["index.html"] = fs.readFileSync("./public/index.html");
    //cache["main.js"]    = fs.readFileSync("./client/main.js");
}

function initializeRoutes() {

    routes = {};

    routes["/"] = function(req, res) {
        
        res.setHeader("Content-Type", "text/html");
        res.send(cache["index.html"]);
    };

    routes["/main.js"] = function(req, res) {
        
        res.setHeader("Content-Type", "application/javascript");
        res.send("...");
    };;

    routes["/tx/:tx_id"] = function(req, res) {
    
        api.getTx(req.params.tx_id).then(function(data){
            
            res.send(data);
        });
    };
}

function initializeServer() {

    app = express();
    app.use(express.static("public"));
    
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
