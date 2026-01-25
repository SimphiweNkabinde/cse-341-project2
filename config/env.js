const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

const config = {
  port: process.env.PORT || 3000,
  mongoUri: process.env.MONGODB_URI,
};

module.exports = config;
