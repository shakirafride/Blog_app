import express from 'express';
import { singlepostget } from '../controllers/public.js';


const publicroute = express.Router();


publicroute.get('/getsingle/:id',singlepostget)





export default publicroute;

