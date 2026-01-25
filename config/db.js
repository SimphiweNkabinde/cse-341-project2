const mongoose = require("mongoose");
const config = require("./env");

const connectDB = async () => {
  try {
    // 2026 Best Practice: Use environment variables instead of hardcoding strings
    const conn = await mongoose.connect(config.mongoUri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
