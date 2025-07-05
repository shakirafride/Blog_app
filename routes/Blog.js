import express from "express";
import { Create } from "../controllers/Blog.js";
import { IsAdmin } from "../middlewares/IsAdmin.js";
import upload from "../middlewares/multer.js";


const Blogroutes = express.Router();

Blogroutes.post('/create',IsAdmin,upload.single('postimage'),Create)





export default Blogroutes;