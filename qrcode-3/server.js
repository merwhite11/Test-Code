const express = require('express');
const axios = require('axios');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3002;

// Serve index.html
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Generate and serve QR code
app.get('/generate-qrcode', async (req, res) => {
    const pageUrl = req.query.url; // URL to encode in QR code
    const qrCodeApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(pageUrl)}`;

    try {
        const response = await axios.get(qrCodeApiUrl, { responseType: 'stream' });
        response.data.pipe(res);
    } catch (error) {
        console.error('Error generating QR code:', error);
        res.status(500).send('Error generating QR code');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
