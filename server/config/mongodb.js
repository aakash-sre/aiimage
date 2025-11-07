import mongoose from "mongoose";

const connectDB = async ()=>{

  mongoose.connection.on('connected', ()=>{
    console.log("database Jud gay hai")
  })
   await mongoose.connect(`${process.env.MONGODB_URI}/aiimages`)
}

export  default connectDB;