import mongoose from "mongoose";

export const connectDB=async ()=>{
    await mongoose.connect('mongodb+srv://vanshsachdeva900:Bhavok_9876@cluster0.4ujmz.mongodb.net/food-del').then(()=>console.log("DB connected"));
}