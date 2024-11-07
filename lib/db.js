import mongoose from "mongoose"
import { AuthDb } from "../commonExports/MongoDb-Auth.js";

export const connectDB = async () => {
    try {
        await mongoose.connect(AuthDb)

console.log("db connected");
    } catch (error) {
        
        console.log(error);
        process.exit(1)
    }
}