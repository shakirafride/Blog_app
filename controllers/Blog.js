import { error } from "console";
import Postmodel from "../models/Blog.js";
import fs from 'fs';
import path from 'path'
const Create = async (req, res) => {
  const { title, des } = req.body;
  try {
    // image path
    const imagespath = req.file.filename
    // create Blog 
    const createBlog = new Postmodel({
      title,
      des,
      image: imagespath
    })
    await createBlog.save();

    return res.status(200).json({
      message: 'Post created successfully',
      success: true,
      Post: createBlog
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: "Internal server errer",
      success: false,

    })
  }
};

const Deletepost = async (req, res) => {
  const postid = req.params.id;
  try {
    const Findpostid = await Postmodel.findById(postid);
    if (!Findpostid) {
      return res.status(404).json({
        message: "Post Not Found",
        success: false
      })
    };
    // delete image
    if(Findpostid.image){
      const deletepath = path.join('public/images',Findpostid.image);
      fs.promises.unlink(deletepath)
      .then(()=> console.log('post images delete successfully'))
      .catch(error => console.log('error deleted ',error))
    }
    const deletepost = await Postmodel.findByIdAndDelete(postid);
    return res.status(200).json({
      message: "Post deleted successfully",
      success: true,
      Post: deletepost
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: "Internal server errer",
      success: false,

    })
  }
}


const Getpost = async (req, res) => {
  try {
    const Getpost = await Postmodel.find();
    if (!Getpost) {
      return res.status(404).json({
        message: "Post NOt found",
        success: false
      })
    };

    return res.status(200).json({
      success: true,
      Getpost
    })

  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: "Internal server errer",
      success: false,

    })
  }
}

const UpdatePOst = async (req, res) => {
  try {
    const { title, des } = req.body;
    const postId = req.params.id;

    const postUpdate = await Postmodel.findById(postId);
    if (!postUpdate) {
      return res.status(404).json({ message: 'PostId not Found', success: false });
    }

    if (title) {
      postUpdate.title = title;
    }

    if (des) {
      postUpdate.des = des;
    }

    if (req.file) {
      postUpdate.image = req.file.filename;
    }

    await postUpdate.save();
    
    return res.status(200).json({
      message: 'Post update successfully',
      success: true,
      postup: postUpdate
    });

  } catch (error) {
    console.error("Update error:", error);
    return res.status(500).json({
      message: "Internal server error",
      success: false
    });
  }
};


export { Create, Deletepost, Getpost, UpdatePOst }