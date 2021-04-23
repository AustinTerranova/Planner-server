
const db = require("../models/sequelize.js")
const Users = db.user  

module.exports = function(passport,LocalStrategy) {
    //local strategy checks if the username is in the database and if it is not then it creates a new user with that information
    passport.use("signup", new LocalStrategy(function(username,password,done) {
        
        Users.findAll({where:{username: username}}).then(userInformation => {
            if(!userInformation.length){

                const newUser = {
                    username: username,
                    password: password
                }
                Users.create(newUser).then(userData=> {
                    userData.isNewRecord = true
                    console.log(userData) // userData is for debugging
                })                        //I am using it to see if the user got created
               
                return done(null,userInformation)
            }

            if(userInformation.length){
                console.log("Error that user already exists")
                return done(null,false)
            }
        }).catch(err => {
            console.log(err)
        })
        
    }));

   
    passport.use("login", new LocalStrategy(function(username,password,done) {
        
        Users.findAll({where:{username: username, password: password}}).then(userInformation => {
            if(!userInformation.length){
                console.log("no user found")
                return done(null,false)
            }

            if(userInformation.length){
               // console.log("Error that user already exists")
                return done(null,userInformation)
            }
        }).catch(err => {
            console.log(err)
        })
        
    }));
    
   


    passport.serializeUser(function(userInformation, done) {
        done(null, userInformation)
      });


    passport.deserializeUser(function(userInformation, done) {
            done(err,userInformation)
        
      });
    
};