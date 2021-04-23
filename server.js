
const express = require("express")
const app = express()
const session = require("express-session")
const SequelizeStore = require("connect-session-sequelize")(session.Store)
const db = require("./models/sequelize.js")
const cors = require("cors")
const LocalStrategy = require('passport-local').Strategy;
const passport = require("passport")
require('./passport/passport')(passport, LocalStrategy)
const userRouter = require('./routes/user-routes.js')(passport)

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.")
})



app.use(session({
  secret: "secret",
  store: new SequelizeStore({
    db: db.sequelize
  }),
  resave: true,
  saveUninitialized: true
}))
app.use(cors({origin:"http://localhost:3000", optionsSuccessStatus: 204 }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(passport.initialize())


app.use("/user", userRouter)


// set port, listen for requests on port 8080
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})