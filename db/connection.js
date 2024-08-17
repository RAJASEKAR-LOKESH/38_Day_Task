const mongoose=require('mongoose')
const mongourl="mongodb://localhost:27017/Hall_Booking"
const connection=async()=>{
    await mongoose.connect(mongourl)
    console.log("We are connected to Mongodb")
}
// connection()
module.exports=connection

