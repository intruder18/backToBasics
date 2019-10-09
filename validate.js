
var Joi = require('joi');
var validate = function validate(req,res,next){

    try{
    const schema = Joi.object().keys({
        username: Joi.string().alphanum().min(6).max(16).required(),
        password: Joi.string().regex(/^[a-zA-Z0-9]{6,16}$/).min(6).required()
    }).with('username', 'password');
    
    console.log(req.body)
    let myObj = {
        username: req.body.username,
        password: req.body.password
     };
    
     const result =  Joi.validate(myObj, schema);
     
    //  res.status(200).json({
    //      message:'ok'
    //  });
    if(result.error!==null)
    {
        throw result;
    }
    next();
    }
    catch (err)
    {
        res.status(404).json({
            message: "error in catch block"
            
        });
        //console.log("in catch block ",err);
    }
    
 }
//var b = validate(1,1,1);
//console.log(b);
 module.exports = validate;