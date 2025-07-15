import Postmodel from "../models/Blog.js";
import CommentModle from "../models/Comment.js";


const Addcomment = async(req,res)=>{
    try {
        const {postId,UserId,comment}= req.body;

        const Newcomment = new CommentModle({
            postId,
            UserId,
            comment
        });

        await Newcomment.save();
        const Existpost = await Postmodel.findById(postId);
        if(!Existpost){
            return res.status(404).json({
                message:"Blog post not found",
                success:false
            })
        };
        Existpost.comments.push(Newcomment._id);
        await Existpost.save()
        return res.status(200).json({
      message: 'Comment added successfully',
      success: true,
      comment: Newcomment
    })
    } catch (error) {
         console.log(error)
    return res.status(500).json({
      message: "Internal server errer",
      success: false,

    })
    }
};



export {Addcomment}