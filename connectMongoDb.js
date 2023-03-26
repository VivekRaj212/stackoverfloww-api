import mongoose from "mongoose";
// import dotenv from "dotenv";
// dotenv.config();


const connectDB = async () => {
  try {
    const url = process.env.CONNECTION_URI;
    const conn =  mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    // console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;
