import express from "express";
import blog from "./routes/blog.js";
const app=express();

import dotenv from "dotenv";
dotenv.config();

const PORT=process.env.PORT||5000;

app.use(express.json());

app.use("/api/v1",blog);

import dbConnect from "./config/database.js";
dbConnect();


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})


app.get("/",(req,res)=>{
    res.send("<h1>Welcome to my API</h1>");
})