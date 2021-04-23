var router = require("express").Router();


module.exports = function(passport){
    
    router.post("/login",passport.authenticate("login"),(req,res) => {
        //console.log("is req.user",req.user.passport.session)
        console.log("req.session login",req.session.passport)
    })
   
    router.post("/signup", passport.authenticate("signup"),(req,res) => {
         //console.log(req)
         console.log("req.session",req.session.passport)
     })

    
    //router.post("/signup",passport.authenticate("local"))
        
    return router
}    

