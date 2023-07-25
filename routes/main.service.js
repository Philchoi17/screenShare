const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  console.log("middleware here");
  next();
});

router.get("/", function (req, res) {
  res.send("Hello World");
});

module.exports = router;
