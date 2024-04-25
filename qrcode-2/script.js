const qrcode = require('qrcode');
const fs = require('fs');

const link = "https://openlibrary.org/works/OL17860744W/A_Court_of_Mist_and_Fury";

// Generate the QR code
qrcode.toFile('./qrcode.png', link, function (err) {
  if (err) throw err;
  console.log('QR code generated successfully');
});