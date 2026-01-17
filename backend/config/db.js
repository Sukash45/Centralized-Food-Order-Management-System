import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://sukash:sukash621@cluster0.w59ynol.mongodb.net/A-Food').then(()=>console.log("DB Connected"));
}