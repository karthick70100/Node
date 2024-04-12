const WebSocket = require('ws');

// Create a WebSocket client instance
const ws = new WebSocket('ws://localhost:8080');

// Event handler for when the connection is established
ws.on('open', function open() {
  console.log('Connected to the server');

  // Send a message to the server
  ws.send('Hello Server!');
});

// Event handler for when the client receives a message from the server
ws.on('message', function incoming(message) {
  console.log('Received: %s', message);
});

// Event handler for when the connection is closed
ws.on('close', function close() {
  console.log('Disconnected from the server');
});
