import mongoose, { Types } from "mongoose";


const comments = new mongoose.Schema({
postId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'posts',
    required:true
},
UserId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:true
},
comment:{
    type:String,
    required:true,
    
}
},{timestamps:true});



const CommentModle = mongoose.model('comments',comments);


export default CommentModle