var router = require("express").Router();


module.exports = function(passport){
    
    router.post("/",passport.authenticate("local"))
    //router.post("/login",passport.authenticate("login"))
    //router.post("/signup",passport.authenticate("local"))
        
    return router
}    

