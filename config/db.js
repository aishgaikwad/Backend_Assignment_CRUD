import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

export const dbConnection =  mongoose.connect(process.env.MONGO_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
}).then(() => console.log("Database connected"))
  .catch(err => console.error("Database connection error:", err));