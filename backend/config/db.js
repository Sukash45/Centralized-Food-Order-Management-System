import mongoose from "mongoose";

export const connectDB = async () => {
    // This looks for the variable in your .env file
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connected");
}