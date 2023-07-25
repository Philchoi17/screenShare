require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");

const mainService = require("./routes/main.service");
const mainViews = require("./routes/main.views");
const socketListener = require("./routes/socket.service");

const app = express();
const server = require("http").createServer(app);

const { Server } = require("socket.io");

const io = new Server(server);

app.use(cors());

app.use("/main", mainService);

app.use("/views", mainViews);

app.use(express.static("scripts"));

socketListener(io);

server.listen(process.env.PORT, function () {
  console.log(`Server is running on port ${process.env.PORT}`);
});
