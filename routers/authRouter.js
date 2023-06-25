const {Router} = require("express")

var router = Router();

router.route("/login")
    .get((req,res,next)=>{
        //res.sendFile()
        try{
            res.json({status:"ok"})
            console.log("login")
        }
        catch(err){
            next(err);
        }
    })
    .post((req,res,next)=>{
        //res.sendFile()
        try{
            res.json({status:"ok"})
            console.log("login")
        }
        catch(err){
            next(err);
        }
    })
    .all((req,res,next)=>res.error(errors.methodNotAllowed) )

module.exports = {
    AuthRoutes : router
}