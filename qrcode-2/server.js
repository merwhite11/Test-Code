const express = require('express');
const app = express();

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Serve the generated QR code image
app.get('/qrcode.png', (req, res) => {
  res.sendFile(__dirname + '/qrcode.png');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});