console.clear();
const express=require('express');
const connectDB=require("./config/dbConnect");
const app=express();
require("dotenv").config();
// connect to database
connectDB();
app.use(express.json());
app.use('/user',require("./routs/Userauthroutes"))
app.use('/service',require("./routs/ServicesRoutes"))




app.listen(process.env.PORT,(err)=>{
    err?console.log(err):console.log("server is running")
});