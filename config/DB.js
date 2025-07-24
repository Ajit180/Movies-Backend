import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();

export const connectdb = async()=>{
    try {

        await mongoose.connect(process.env.DB);
        console.log("Conncected to monongodb database");
        
    } catch (error) {
        console.log("Error in conncecting the database");
    }
}