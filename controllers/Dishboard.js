import UserModel from "../models/Auth.js";
import Postmodel from "../models/Blog.js";
import fs from 'fs';
import path from 'path'
import CommentModle from "../models/Comment.js";

const GetAdata = async(req,res)=>{
    try {
        const users = await UserModel.find();
        const post = await Postmodel.find();
        const comments = await CommentModle.find()

        // comment will be here
        if(!users && !post){
            return res.status(404).json({
                message:"Not data found",
                success:false
            })
        };
        res.status(200).json({
            success:true,
            users,
            post,
            comments
        })
    } catch (error) {
         console.log(error)
    return res.status(500).json({
      message: "Internal server errer",
      success: false,

    })
    }
};

const GetUser = async(req,res)=>{
     try {
        const users = await UserModel.find();
       
        if(!users){
            return res.status(404).json({
                message:"Not data found",
                success:false
            })
        };
        res.status(200).json({
            success:true,
            users,
        })
    } catch (error) {
         console.log(error)
    return res.status(500).json({
      message: "Internal server errer",
      success: false,

    })
    }
}

const DeletUser = async(req,res)=>{
    try {
        const UserId = req.params.id;
        console.log('Userid',UserId)
        const ExistUser = await UserModel.findById(UserId);
        if(!ExistUser){
            return res.status(404).json({
                messge:"User not found",
                success:false
            })
        };
        if(ExistUser.role == 'admin'){
            return res.status(404).json({
                message:"Soory Your Admin You Can't Delete You Account",
                success:false
            })
        };
// delete image
    if(ExistUser.profile){
      const deletepath = path.join('public/images',ExistUser.profile);
      fs.promises.unlink(deletepath)
      .then(()=> console.log('post images delete successfully'))
      .catch(error => console.log('error deleted ',error))
    }
        const DletetUser = await UserModel.findByIdAndDelete(UserId);
          return res.status(200).json({
            message:'User deleted successfully',
            success:true,
            User:DletetUser
          })

    } catch (error) {
              console.log(error)
    return res.status(500).json({
      message: "Internal server errer",
      success: false,

    })
    }
}
export {GetAdata ,GetUser,DeletUser}