const WebSocket = require('ws');

// Create a WebSocket server instance
const wss = new WebSocket.Server({ port: 8080 });

// Event handler for when a client connects to the WebSocket server
wss.on('connection', function connection(ws) {
  console.log('A client connected');

  // Event handler for when the server receives a message from a client
  ws.on('message', function incoming(message) {
    console.log('Received: %s', message);

    // Echo the received message back to the client
    ws.send(`Echo: ${message}`);
  });

  // Event handler for when a client closes the connection
  ws.on('close', function close() {
    console.log('A client disconnected');
  });
});
