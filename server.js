var express = require("express");
var app = express();


var PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
   console.log("Localhost is listening on " + PORT); 
});