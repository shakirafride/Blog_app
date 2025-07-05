import mongoose from "mongoose";


const UserSchame = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
     email:{
        type:String,
        required:true
    },
     password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true,
        enum:['admin','user'],
        default:'user'
    },
    profile:{
        type:String,
    }
},{timestamps:true});


const UserModel= mongoose.model('User',UserSchame);

export default UserModel;