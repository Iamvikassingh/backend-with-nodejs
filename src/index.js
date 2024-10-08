// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";




dotenv.config({
    path: './env',
})


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000 ,()=>{
        console.log(`server is running on port 8000 : ${process.env.PORT}`);
    })
})
.catch((err) => console.error('Error connecting to MongoDB:', err))





/*

first approach to connect with the database 


import express from 'express';
const app = express()

(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERROR",error);
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`Server is running on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR",error);
    }
})() // this is iffie function immideate execution

*/

