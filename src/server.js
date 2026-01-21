const express = require("express");
app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routes/index"));

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
