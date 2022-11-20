

const {findByCredentials,generateAuthToken,getPublicProfile}= require("../service/service")
const {UserModel}  = require("../model/UserModel")

const express = require('express')
const path =require('path')



const homePage=async(req,res)=>{
    
    try{
    
   res.sendFile(path.resolve(__dirname,"../views/index2.html"))
        console.log("hiii home")
    }
     catch(e){
        res.status(400).send(e)
     }
}



const accountPage=async(req,res)=>{
    try{
        res.sendFile(path.resolve(__dirname,"../views/account-login.html"))
    }
     catch(e){
        res.status(400).send(e)
     }
}



const login =async(req,res)=>{
    try{
        console.log("hiii login",req.body)
       const user =await findByCredentials(req.body.email,req.body.password)
       ////// Token creation ///////////
       const token =  await generateAuthToken(user)
       if(user && token){
           console.log("user and token")
        // res.send({user,token})  
           //hiding private data
           res.send({user:getPublicProfile(user),token:token})
         
       }
       else{
        console.log("last")
        res.send(false)
       }
       
    }
    catch(e){
       res.status(400).send(e)
    }
}



const SigningUp=async(req,res)=>{
    
    try{
        const user =new UserModel(req.body)
        await user.save()
        const token =  await generateAuthToken(user)
        res.send({user,token})
    }
    catch (error) {
        res.status(401).send({

            message: error.message,

            error:error.message

        });
        
    }
}
module.exports ={
    accountPage,
    login,
    SigningUp,
    homePage

}