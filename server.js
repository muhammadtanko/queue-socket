const WebSocket = require("ws");

// Create a WebSocket server on port 8080
const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", function connection(ws) {
  console.log("Client connected");

  // Send a test ID after 5 seconds
  setTimeout(() => {
    const guestId = 4; // Example guest ID
    ws.send(guestId.toString());
  }, 5000);

  // Handle incoming messages from the client
  ws.on("message", function incoming(message) {
    const messageString = message.toString();
    console.log("received:", messageString);
  });

  ws.on("close", function close() {
    console.log("Client disconnected");
  });
});

console.log("WebSocket server is running on ws://localhost:8080");
