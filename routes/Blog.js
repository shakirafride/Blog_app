import express from "express";
import { Create } from "../controllers/Blog.js";
import { IsAdmin } from "../middlewares/IsAdmin.js";


const Blogroutes = express.Router();

Blogroutes.post('/create',IsAdmin,Create)





export default Blogroutes;