function generateQRCode() {
    const text = document.getElementById('text').value;
    const qrDiv = document.getElementById('qrcode');
    qrDiv.innerHTML = ''; // Clear previous QR
  
    if (!text) {
      alert('Please enter some text or URL!');
      return;
    }
  
    QRCode.toCanvas(text, { errorCorrectionLevel: 'H' }, function (err, canvas) {
      if (err) {
        console.error(err);
        alert('Failed to generate QR Code.');
        return;
      }
      qrDiv.appendChild(canvas);
    });
  }
  