function socketListener(io) {
  io.on("connection", (socket) => {
    console.log("a user connected");

    socket.on("message", function (message) {
      console.log("Received message:", message);
      io.emit("screen", message);
    });

    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });
}

module.exports = socketListener;
