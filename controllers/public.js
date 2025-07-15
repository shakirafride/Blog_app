import Postmodel from "../models/Blog.js";


const singlepostget = async(req,res)=>{
    try {
        const singpostid = req.params.id;
        
        const findpost = await Postmodel.findById(singpostid)
        .populate({
            path:'comments',
            populate:{
                path:"UserId"
            }
        })
  if(!findpost){
     return res.status(404).json({
      message: 'Blog post not found',
      success: false,
      Post: findpost
    })
  };
   return res.status(200).json({
      success: true,
      Post: findpost
    })

    } catch (error) {
         console.log(error)
    return res.status(500).json({
      message: "Internal server errer",
      success: false,

    })
    }
};



export {singlepostget}