var qrCode;

document.getElementById('generate-button').addEventListener('click', function() {
  var text = document.getElementById('text-input').value;
  var qrCodeContainer = document.getElementById('qr-code');
  qrCodeContainer.innerHTML = ''; // Limpa o conteúdo anterior

  qrCode = new QRCode(qrCodeContainer, {
    text: text,
    width: 200,
    height: 200
  });
});

document.getElementById('export-svg-button').addEventListener('click', function() {
  var svg = document.getElementById('qr-code').querySelector('canvas').toDataURL("image/svg+xml");
  var downloadLink = document.createElement('a');
  downloadLink.href = svg;
  downloadLink.download = 'qr_code.svg';
  downloadLink.click();
});

document.getElementById('export-png-button').addEventListener('click', function() {
  var canvas = document.getElementById('qr-code').querySelector('canvas');
  var png = canvas.toDataURL("image/png");
  var downloadLink = document.createElement('a');
  downloadLink.href = png;
  downloadLink.download = 'qr_code.png';
  downloadLink.click();
});

document.getElementById('change-color-button').addEventListener('click', function() {
  var color = document.getElementById('color-input').value;
  var svg = document.getElementById('qr-code').querySelector('canvas');

  // Limpa o canvas
  var ctx = svg.getContext('2d');
  ctx.clearRect(0, 0, svg.width, svg.height);

  // Redesenha o QR code com a nova cor
  qrCode._htOption.colorDark = color;
  qrCode.makeCode(qrCode._htOption.text);
});
