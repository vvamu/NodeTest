const {Router} = require("express")
const {userController} = require('../controllers/userContorller')
const {User} = require('../models/user')


var router = Router();

router.route("/")
    .get(userController.getAll())
    .post((req,res,next)=>{
        //res.sendFile()
        try{
            const newUser = new User({
                name: "John Doe",
                address: "123 Main St",
              });
              
            let savedUser = newUser.save().then((savedUser)=> console.log(savedUser))
            res.json(savedUser)
        }
        catch(err){
            next(err);
        }
    })
    .all((req,res,next)=>res.error(errors.methodNotAllowed) )

module.exports = {
    userRouter : router
}