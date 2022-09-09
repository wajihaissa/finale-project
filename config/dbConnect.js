const mongoose=require('mongoose');
// connectin to data base
const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.CONNECT)
        console.log("database  connected")

        
    } catch (err) {
        console.log("database is not connected")
        
    }
}
module.exports=connectDB