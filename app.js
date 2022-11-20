

const mongoose = require("mongoose")
const express = require("express"); 
const app= express();
const path =require("path")
const url='mongodb://localhost/Software';
const ejs =require("ejs")


const cors =require('cors')
const routerWeb  = require("./router/router");



mongoose.connect(url, { useNewUrlParser: true })  

const con = mongoose.connection 
con.on('open', function () {
    console.log("connected...")
})

////
app.use(cors())  //cross-origin resource sharing
app.use(express.json()) // json format use cheyyaaaan

app.use(express.urlencoded({ extended: true }))  

app.use(express.static(`${__dirname}/views/`));
app.use('/public', express.static('public'));



app.use('/', routerWeb )


const PORT = process.env.PORT || 4000;
app.listen(PORT,()=>{
    console.log("server is running 0n 4000")
})