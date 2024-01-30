import express from 'express'
import console = require('console');
import mongoose=require("mongoose");
import {Request,Response} from 'express';

const PORT=5000;
const app=express();

// mongoose.connect("mongodb://localhost:27017/userDB");

app.get('/',(req:Request,res:Response)=>{
    console.log("Hello from server");
})

app.listen(PORT,()=>{
    console.log("server is ready at port 5000");
})