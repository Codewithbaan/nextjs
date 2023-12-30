const { default: mongoose } = require("mongoose");
// import { Mongoose } from "mongoose";
export async function connectDB(){
  try {
    await mongoose.connect(process.env.MONGO_URI).then(()=>{
      console.log("Connected");
    }).catch(e=>console.log(e))
  } catch (error) {
    console.log(error);
  }
}