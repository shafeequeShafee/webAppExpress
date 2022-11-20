const express = require('express')
const routerWeb = express.Router()



const {
    homePage,
    accountPage,
    login,
    SigningUp
} = require("../controller/controller")


routerWeb.get('/',homePage)
routerWeb.get('/account',accountPage)
routerWeb.post('/account/login', login)
routerWeb.post('/account/signingUp', SigningUp)
routerWeb.get("*", (req, res) => {
    res.status(404).send("<h1>404</h1>")
})





module.exports = routerWeb
