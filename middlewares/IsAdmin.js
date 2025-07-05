import jwt from "jsonwebtoken";
import UserModel from "../models/Auth.js";

const IsAdmin = async(req,res,next)=>{
    try {
        const token = req.cookies.token;
      
        if(!token){
            return res.status(401).json({
                message:'Unauthorized: No token provided',
                success:false
            })
        };
        // decoded
        const decoded = jwt.verify(token,process.env.JWT_SECREATE);
       const User = await UserModel.findById(decoded.userId);
        if(!User){
             return res.status(403).json({
                message:'Unauthorized: User not Found',
                success:false
            })
        }
        // User is Admin
        if(User.role != 'admin'){
         return res.status(403).json({
                message:'Unauthorized: User is not an Admin',
                success:false
            })
        }
        next()
    } catch (error) {
         console.log(error)
        return res.status(500).json({
            message: "Internal server errer",
            success: false,

        })
    }
};




export {IsAdmin}