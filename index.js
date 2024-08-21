import express from "express";
import dotenv from "dotenv";
import { dbConnection } from "./config/db.js";
import moviesRoutes from "./routes/route.js"

const app = express();
dotenv.config();
app.use(express.json());    
app.use('/',moviesRoutes)

app.get('/',(req, res)=>{
    res.json({message:"Api is ready to progress!"});
})

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    
})