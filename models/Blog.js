import mongoose from "mongoose";


const Blogmodels = new mongoose.Schema({
title:{
    type:String
},
des:{
    type:String
},
image:{
    type:String
}
},{timestamps:true});


const Postmodel = mongoose.model('posts',Blogmodels);



export default Postmodel;