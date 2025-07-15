import express from "express";
import { Addcomment } from "../controllers/Comment.js";
import Islogin from "../middlewares/Isloggin.js";


const commentRoutes = express.Router();

commentRoutes.post('/commentadd',Islogin,Addcomment)





export default commentRoutes