import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import Dbconneted from "./utils/db.js";
import Authroutes from "./routes/Auth.js";
import cookeparse from "cookie-parser"
import Blogroutes from "./routes/Blog.js";
import Dishbordroutes from "./routes/Dishboard.js";
import commentRoutes from "./routes/Comment.js";
import publicroute from "./routes/public.js";

dotenv.config();

const app = express();
// db conneted
Dbconneted();

// static
app.use(express.static('public'))
// cookie_parser
app.use(cookeparse())
app.use(cors("*"));
app.use(express.json());
app.use(express.urlencoded({extended:true}))

// Routes
app.use('/api/user',Authroutes);
app.use('/blog',Blogroutes)
app.use('/deshboard',Dishbordroutes);
app.use('/comment',commentRoutes);
app.use('/public',publicroute)

// PORT
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
