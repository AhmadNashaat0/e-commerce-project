import mongoose from "mongoose";

export const connectDB = async(url) =>{
    try {
        await mongoose.connect(url); 
        console.log("Database is connected successfully!");
    } catch (e) {
        console.log(e);

    }

}