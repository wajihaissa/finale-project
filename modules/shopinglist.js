const mongoose=require('mongoose')
const { schema } = require('./services')
const Schema=mongoose.Schema
const shopinglist=new Schema({
    name:{
        type:String,
        required:true
    },
    userid:{
        type:String,
        required:true
    },
    
    
    
})
    