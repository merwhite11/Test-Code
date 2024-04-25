const express = require("express");
const fs = require("fs");
const ejs = require("ejs");
var qrcode = require('qrcode')
// const generateQr = require('../src/index.js'); // Assuming generateQr.js is in the same directory
const { createCanvas } = require("canvas");

const app = express();
app.use(express.static('dist'));

app.get("/", async (req, res) => {
  const link =
    "https://openlibrary.org/works/OL17860744W/A_Court_of_Mist_and_Fury";

  const canvas = createCanvas(200, 200);
  await qrcode.toCanvas(canvas, link);

  try {
    const qrCodeImagePath = `${req.protocol}://${req.get('host')}/images/qrcode.png`;
    const qrCodeImageStream = fs.createWriteStream(qrCodeImagePath)
    const stream = canvas.createPNGStream();
    stream.pipe(qrCodeImageStream);
    await new Promise((resolve, reject) => {
      qrCodeImageStream.on("finish", () => {
        resolve();
        console.log("PNG File Created!")
      });
      qrCodeImageStream.on("error", reject);
    });
    // Render the EJS template with the QR code data URL
    const renderedHtml = await ejs.renderFile("../dist/index.html", {
      qrCodeImagePath: '/' + qrCodeImagePath
    });

    // Send the rendered HTML as the response
    res.header("Content-Type", "text/html");
    res.send(renderedHtml);
  } catch (error) {
    console.error("Error creating PNG file:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get('/qrcode.png', (req, res) => {
  res.sendFile(__dirname + '/images/qrcode.png');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
