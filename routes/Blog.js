import express from "express";
import { Create, Deletepost, Getpost, UpdatePOst } from "../controllers/Blog.js";
import { IsAdmin } from "../middlewares/IsAdmin.js";
import upload from "../middlewares/multer.js";


const Blogroutes = express.Router();

Blogroutes.post('/create',IsAdmin,upload.single('postimage'),Create);
Blogroutes.delete('/delete/:id',IsAdmin,Deletepost)
Blogroutes.get('/getpost',Getpost);
Blogroutes.patch('/update/:id',IsAdmin,upload.single('postimage'),UpdatePOst)




export default Blogroutes;