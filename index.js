import express from "express";
import connectDB from "./config/database";
import dotenv from "dotenv";
import userRouter from "./routes/userRouter"
import messageRouter from "./router/messageRouter"
import cookieParser from "cookie-parser";


dotenv.config();

const app=express();

app.use(express.json());
app.use(cookieParser());


app.use("/user",userRouter);
app.use("/msg", messageRouter);


const startServer = async ()=>{
    try{
    await connectDB();

    app.listen(process.env.PORT,()=>{
        console.log(`server has started listening on port no ${process.env.PORT}`);
    })
    }

    catch(err){
        console.log(err);
    }

}


startServer();