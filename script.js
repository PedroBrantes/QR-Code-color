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

document.getElementById('export-png-button').addEventListener('click', function() {
  var canvas = document.getElementById('qr-code').querySelector('canvas');
  var png = canvas.toDataURL("image/png");
  var downloadLink = document.createElement('a');
  downloadLink.href = png;
  downloadLink.download = 'qr_code.png';
  downloadLink.click();
});

document.getElementById('change-color-button').addEventListener('click', function() {
  var color1 = document.getElementById('color-input').value;
  var color2 = document.getElementById('color-input-2').value;
  var color3 = document.getElementById('color-input-3').value;

  var colors = [color1, color2, color3].filter(function(color) {
    return color !== "";
  });

  if (colors.length < 2 || colors.length > 3) {
    alert("Selecione entre 2 e 3 cores para criar o gradiente.");
    return;
  }

  var svg = document.getElementById('qr-code').querySelector('canvas');

  // Limpa o canvas
  var ctx = svg.getContext('2d');
  ctx.clearRect(0, 0, svg.width, svg.height);

  // Cria o gradiente
  var gradient = ctx.createLinearGradient(0, 0, svg.width, svg.height);
  for (var i = 0; i < colors.length; i++) {
    gradient.addColorStop(i / (colors.length - 1), colors[i]);
  }

  // Configura a nova cor do QR Code
  qrCode._htOption.colorDark = gradient;
  qrCode.makeCode(qrCode._htOption.text);
});