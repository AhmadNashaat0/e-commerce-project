import mongoose from "mongoose";

const connectDB = async(url) =>{
    try {
        await mongoose.connect(url); 
        console.log("Database is connected successfully!");
    } catch (e) {
        console.log(e);

    }

}

export default connectDB;