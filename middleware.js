var middle = function middle1 (req,res,next){
    console.log("middleware checked");
    next();
}
module.exports = middle;