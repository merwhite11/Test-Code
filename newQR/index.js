// index.js (server-side code)
const { createCanvas } = require('canvas');
const QRCode = require('qrcode');
const fs = require('fs');

// Generate QR code
const canvas = createCanvas(200, 200);
const context = canvas.getContext('2d');
QRCode.toCanvas(canvas, 'sample text', function (error) {
  if (error) {
    console.error(error);
    return;
  }

  // Save QR code as a PNG file
  const out = fs.createWriteStream(__dirname + '/public/qrcode.png');
  const stream = canvas.createPNGStream();
  stream.pipe(out);
  out.on('finish', () => console.log('The PNG file was created.'));
});