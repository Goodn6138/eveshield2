const net = require("net");

const PORT = process.env.PORT || 5000;

const server = net.createServer((socket) => {
  console.log("📡 Device connected:", socket.remoteAddress);

  socket.on("data", (data) => {
    console.log("📥 Raw packet:", data.toString("hex"));

    // Very simple ACK (GF-21 variants differ; this is just for testing)
    const ack = Buffer.from("OK", "utf8");
    socket.write(ack);

    console.log("📤 Sent ACK");
  });

  socket.on("close", () => {
    console.log("❌ Device disconnected");
  });

  socket.on("error", (err) => {
    console.error("⚠️ Socket error:", err.message);
  });
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 TCP server running on port ${PORT}`);
});
