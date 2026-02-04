const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

const config = {
  port: process.env.PORT || 3000,
  mongoUri: process.env.MONGODB_URI,
  sessionSecret: process.env.SESSION_SECRET,
  authProvider: {
    github: {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.GITHUB_CALLBACK_URL,
    },
  },
};

module.exports = config;
