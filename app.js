const config = require("./.config.js");
const express = require("express");

var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
    res.render("index", {name: "Jacob Richardson"}); 
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The Website server has started.");
});