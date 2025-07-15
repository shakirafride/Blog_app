import UserModel from "../models/Auth.js";
import bycrpt from "bcryptjs";
import jwt from "jsonwebtoken"

const Register = async (req, res) => {

    try {
        const { fullname, email, password } = req.body;
        // MissingField logic
        if (!fullname || !email || !password) {
            const missingField = !fullname ? "fullname is required"
                : !email ? "email is required" :
                    "password is required"
            return res.status(401).json({
                message: missingField,
                success: false,
            });
        };

        const existUser = await UserModel.findOne({ email });
        if (existUser) {
            return res.status(303).json({
                message: 'User is already register Please login',
                success: false,
            })
        };
        // hash passwr
        const hashpassword = await bycrpt.hash(password, 10)
        // Images path 
        const imagespath = req.file.filename;
        console.log('imagepaht',imagespath)
        const Userdata = new UserModel({
            fullname,
            email,
            password: hashpassword,
            profile: imagespath
        });

        await Userdata.save();
        return res.status(200).json({
            message: "User register successfully",
            success: true,
            User: Userdata
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "Internal server errer",
            success: false,

        })
    }
};

const Login = async (req, res) => {
    const { email, password } = req.body
    try {
        // All filed is required
        if (!email || !password) {
            const missingField = !email ? "email is required" :
                "password is required"
            return res.status(401).json({
                message: missingField,
                success: false,
            });
        };
        const Finduser = await UserModel.findOne({ email });

        if (!Finduser) {
            return res.status(400).json({
                message: 'User is not Found Please Register',
                success: false
            });
        }
        // compare password
        const ComparePassword = await bycrpt.compare(password, Finduser.password);
        if (!ComparePassword) {
            return res.status(404).json({
                message: 'Invalid password',
                success: false
            });
        }
        // Jwt Token
        const token = jwt.sign({userId:Finduser._id},
            process.env.JWT_SECREATE
        );
         // cooke 
         res.cookie('token',token,{
            httpOnly:true,
            secure:false,
            maxAge:3 * 24 * 60 * 60 * 1000 
         })
        return res.status(200).json({
            message: 'login successfully',
            user: Finduser,
            token
        });
       
    } catch (error) {
   console.log(error)
        return res.status(500).json({
            message: "Internal server errer",
            success: false,

        })
    }
}


const Logout = async(req,res)=>{
    try {
        res.clearCookie('token')
        res.status(200).json({
            message:'Logout Successfully',
            success:true
        })
    } catch (error) {
          console.log(error)
        return res.status(500).json({
            message: "Internal server errer",
            success: false,

        })
    }
}



export { Register, Login,Logout }