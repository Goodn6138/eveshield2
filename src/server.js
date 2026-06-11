const net = require("net");

const PORT = process.env.PORT || 5000;

const server = net.createServer((socket) => {
  console.log("Device connected:", socket.remoteAddress);

  socket.on("data", (data) => {
    console.log("Packet:", data.toString("hex"));

    socket.write("OK");
  });

  socket.on("error", (err) => {
    console.log("Socket error:", err.message);
  });
});

server.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port", PORT);
});
