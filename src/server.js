const express = require("express");
const config = require("../config/env");
const connectDB = require("../config/db");
app = express();

const PORT = config.port || 3000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routes/index"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
