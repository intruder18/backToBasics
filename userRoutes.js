var express = require('express');
const user = express.Router();
user.post('',(req,res)=>{
    res.send("hello verified ");
});

module.exports = user;