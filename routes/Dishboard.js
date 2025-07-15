import express from 'express';
import { DeletUser, GetAdata, GetUser } from '../controllers/Dishboard.js';
import { IsAdmin } from '../middlewares/IsAdmin.js';

const Dishbordroutes = express.Router();

Dishbordroutes.get('/',IsAdmin,GetAdata);
Dishbordroutes.get('/users',IsAdmin,GetUser);
Dishbordroutes.delete('/deleteuser/:id',IsAdmin,DeletUser);




export default Dishbordroutes;