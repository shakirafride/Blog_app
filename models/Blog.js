import mongoose from "mongoose";


const Blogmodels = new mongoose.Schema({

},{timestamps,trure});


const Blogmodel = mongoose.model('Blog',Blogmodels);



export default Blogmodel;