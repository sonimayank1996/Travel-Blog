const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE).then(() => {
      console.log("connected successfully");
    });
  } catch (err) {
    console.log("error", err);
  }
};

module.exports = connectDB;
