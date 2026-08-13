import jwt from "jsonwebtoken"
import User from "../model/userSchema.js"



const authUserMiddleware= async (req,res,next)=>{
    try {
        
        const {token} = req.cookies;
        const payload = jwt.verify(token,process.env.JWT_SECRET);

        const existingUser = await User.findById(payload.id)

        if(!existingUser){
            return res.status(400).json({
                message:"user doesnt exist"
            })
        }

        next();

    } catch (error) {
        console.log(err);
        res.status(500).json({
            message:"not exist"
        })
        
    }
}