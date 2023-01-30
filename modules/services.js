const mongoose=require("mongoose")
const schema=mongoose.Schema;
const serviceSchema= new schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,    
        required:true
    },
    companyName:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    logo:{
        type:String,
        required:true
    }


})
module.exports=mongoose.model("services",serviceSchema)