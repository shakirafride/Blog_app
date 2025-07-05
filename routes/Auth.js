import express from "express";
import { Login, Logout, Register } from "../controllers/Auth.js";
import upload from "../middlewares/multer.js";

 const Authroutes  = express.Router();

Authroutes.post('/register',upload.single("profile"),Register);
Authroutes.post('/login',Login)
Authroutes.post('/logout',Logout)



 export default Authroutes;