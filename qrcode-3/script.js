// Example script for triggering QR code generation on button click
const qrCodeImg = document.getElementById('qr-code-img');
const generateButton = document.getElementById('generate-button');

generateButton.addEventListener('click', async () => {
    const pageUrl = 'https://example.com'; // Replace with your desired URL
    const qrCodeUrl = `/generate-qrcode?url=${encodeURIComponent(pageUrl)}`;

    try {
        const response = await fetch(qrCodeUrl);
        qrCodeImg.src = URL.createObjectURL(await response.blob());
    } catch (error) {
        console.error('Error generating QR code:', error);
    }
});
