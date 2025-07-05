import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import Dbconneted from "./utils/db.js";
import Authroutes from "./routes/Auth.js";
import cookeparse from "cookie-parser"
import Blogroutes from "./routes/Blog.js";

dotenv.config();

const app = express();
// db conneted
Dbconneted();

// cookie_parser
app.use(cookeparse())
app.use(cors("*"));
app.use(express.json());
app.use(express.urlencoded({extended:true}))

// Routes
app.use('/api/user',Authroutes);
app.use('/blog',Blogroutes)

// PORT
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
