import Postmodel from "../models/Blog.js";

const Create = async(req,res)=>{
    const {title,des}= req.body;
    try {
    
    //   if(!title || !des){
    //     const missingPostfile = !title ?"title is required":
    //     "des is required"
    //     return res.status(404).json({
    //         message:missingPostfile,
    //         success:false
    //     })
    //   }
    

    // image path
 const imagespath = req.file.filename
    // create Blog 
    const createBlog =  new Postmodel({
        title,
        des,
        image:imagespath
    })
  await createBlog.save();

  return res.status(200).json({
    message:'Post created successfully',
    success:true,
    Post:createBlog
  })
    } catch (error) {
         console.log(error)
        return res.status(500).json({
            message: "Internal server errer",
            success: false,

        })
    }
};


export {Create}