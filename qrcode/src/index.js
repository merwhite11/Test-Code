var qrcode = require('qrcode')
const ejs = require('ejs')
// const express = require('express');
// const router = module.exports = express.Router()

/*
const {createCanvas} = require('canvas');

const canvas = createCanvas(200, 200);
const context = canvas.getContext('2d');
*/
const link = 'https://openlibrary.org/works/OL17860744W/A_Court_of_Mist_and_Fury'

module.exports = {
  generateQr: async link => {
    const qrCodeDataUrl = await qrcode.toDataURL(link);
    return qrCodeDataUrl;
  }
}

// const qrCodeDataUrl = await generateQr(link);
// const html = ejs.render('<img src="<%= qrCodeDataUrl %>" />', {qrCodeDataUrl})

// res.header('Content-Type', 'text/html');
// res.send(html);

// QRCode.toCanvas(canvas, 'https://openlibrary.org/works/OL17860744W/A_Court_of_Mist_and_Fury', function (error) {
//   if (error) console.error(error)
//   console.log('successful qr creation!');
// })


// const out = fs.createWriteStream(__dirname + '/qrcode.png');
// const stream = canvas.createPNGStream();
// stream.pipe(out);
// out.on('finish', () => {

//   console.log('The PNG file was created.')
// });

/*
console.log('test')
router.get('/', (req, res) => {
  QRCode.toDataURL('https://openlibrary.org/works/OL17860744W/A_Court_of_Mist_and_Fury').then(url => {
    res.send(`
    <h2>QRCode Generated</h2>
    <div><img src='${url}'/></div>
  `)
  }).catch(err => console.error(err))
})
*/