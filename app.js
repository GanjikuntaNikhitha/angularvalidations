

var express = require("express");

var app = express();

// console.log(express.static(__dirname + "/controller"))
// app.use("/controller", express.static(__dirname + "/controller"));
// routes =========================================================
var routes = require("./routes.js")(app);


var server = app.listen(3000, function(){
    console.log("Server listening at port : %s", server.address().port);
})