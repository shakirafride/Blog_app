import mongoose from "mongoose";

const Dbconneted = async()=>{
  try {
    await mongoose.connect(process.env.Db_Url);
    console.log('Monogb is conneted')
  } catch (error) {
    console.log('Monogb is  not conneted',error)
  }
};





export default Dbconneted;