const mongoose=require('mongoose')
const connection=async()=>{
    await mongoose.connect("mongodb://localhost:27017/Hall_Booking")
    console.log("We are connected to Mongodb")
}
// connection()
module.exports=connection

