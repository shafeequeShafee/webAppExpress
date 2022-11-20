const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
        
    },
    password:{
        type:String
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]

})

const UserModel=mongoose.model('UserModel',userSchema)
module.exports ={ UserModel}

