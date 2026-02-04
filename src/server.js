const express = require("express");
const config = require("../config/env");
const connectDB = require("../config/db");
const session = require("express-session");

app = express();

const PORT = config.port || 3000;

connectDB();

app.use(
  session({
    secret: config.sessionSecret,
    resave: false,
    cookie: {
      maxAge: 60 * 60 * 1000,
    },
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routes/index"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
