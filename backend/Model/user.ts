import mongoose from 'mongoose';

interface user{
    email:String,
    password:String
}

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

const User=mongoose.model("User",userSchema);