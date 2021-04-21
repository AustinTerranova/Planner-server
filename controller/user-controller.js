const db = require("../models/sequelize.js")
const Users = db.user

//Create and Save a new User 
exports.create = (username,password) => {
    
    const userInformaton = {
        username: username,
        password: password
    }
    
    Users.create(userInformation).then(userdata => {

            console.log("user created",userdata)

        }).catch(err => {

            console.log(err)

        })
    
}
    

