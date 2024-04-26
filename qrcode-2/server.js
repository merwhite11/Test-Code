const express = require('express');
const app = express();
// const qrcode = require('qrcode');
// const fs = require('fs');

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');

  //TRYING TO DO IT IN ONE GET REQ
  // const link = "https://openlibrary.org/works/OL17860744W/A_Court_of_Mist_and_Fury";

//   qrcode.toFile('./qrcode.png', link, async (err) => {
//     if (err) {
//       console.log('Error generating QR code:', err)
//       return res.status(500).send('Error generating QR code')
//     }

//     res.setHeader('Content-Type', 'text/html');
//     fs.createReadStream(__dirname + '/index.html').pipe(res)
  // })
});

// Serve the generated QR code image
app.get('/qrcode', (req, res) => {
  res.sendFile(__dirname + '/qrcode.png');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});