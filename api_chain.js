var http = require("http");
var Promise = require("promise");

var API_USER     = "9c283baf11954a2c45c0f8199505ac14",
    API_PASS     = "0a10d2ce7656466ba31433381932992f",
    API_HOST     = "api.chain.com",
    API_TX_PATH  = "/v2/bitcoin/transactions/";

function getTX(tx_hash) {

    return new Promise(function(fulfill, reject){
    
        var options = {
            host:     API_HOST,
            port:     80,
            path:     API_TX_PATH + tx_hash,
            headers:  {"Authorization" : "Basic " + (new Buffer(API_USER+":"+API_PASS)).toString("base64")}
        };

        http.get(options, function(response) {

            var data = "";
            response.on("data", function(chunk) {data += chunk;});
            response.on("end", function() {
                
                fulfill(data);
            });
        });
    });
}

module.exports = {

    getTX: getTX
};
