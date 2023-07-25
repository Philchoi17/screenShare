require("dotenv").config();
const express = require("express");

const mainService = require("./routes/main.service");
const mainViews = require("./routes/main.views");

const app = express();

app.use("/main", mainService);

app.use("/views", mainViews);

app.listen(process.env.PORT, function () {
  console.log(`Server is running on port ${process.env.PORT}`);
});
