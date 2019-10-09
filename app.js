var express = require('express');
var bodyParser = require('body-parser');
var json = bodyParser.json();
var app = express();
app.use(json);
var user = require("./userRoutes.js");
var middle= require("./middleware.js")
var validate = require("./validate.js")
app.use('/user',user);
app.post('',middle,validate,(req,res)=>{
    res.send("hello app verified");
})
app.listen(3000,console.log("server started at 3000"));
