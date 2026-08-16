import express from "express";
import {login,logout,signup,profile} from "../controller/userController.js"
import authUserMiddleware from "../middlewares/authUserMiddleware.js"
// import {login, signup, profile, logout} from

const userRouter = express.Router();

userRouter.post("/login",login);
userRouter.post("/logout",logout);
userRouter.post("/signup",signup);
userRouter.get("/profile",authUserMiddleware,profile);
userRouter.profile("/delete",authUserMiddleware,deleteAccount);

export default userRouter;