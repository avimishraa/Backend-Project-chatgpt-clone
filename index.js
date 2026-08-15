import express from "express";
import connectDB from "./config/database";
import dotenv from "dotenv";
import chatRouter from "./routes/chatRouter.js";
import userRouter from "./routes/userRouter.js"
import messageRouter from "./router/messageRouter.js"
import cookieParser from "cookie-parser";



dotenv.config();

const app=express();

app.use(express.json());
app.use(cookieParser());


app.use("/user",userRouter);
app.use("/msg", messageRouter);
app.use("/chat",chatRouter);


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