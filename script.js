document.getElementById('generate-button').addEventListener('click', function() {
    var text = document.getElementById('text-input').value;
    var qrCodeContainer = document.getElementById('qr-code');
    qrCodeContainer.innerHTML = ''; // Limpa o conteúdo anterior
  
    var qrCode = new QRCode(qrCodeContainer, {
      text: text,
      width: 200,
      height: 200
    });
  });
  
  document.getElementById('export-button').addEventListener('click', function() {
    var svg = document.getElementById('qr-code').querySelector('img');
    var svgData = qrCodeContainer.innerHTML;
    var svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    var svgUrl = URL.createObjectURL(svgBlob);
    var downloadLink = document.createElement('a');
    downloadLink.href = svgUrl;
    downloadLink.download = 'qr_code.svg';
    downloadLink.click();
  });
  
  document.getElementById('change-color-button').addEventListener('click', function() {
    var color = document.getElementById('color-input').value;
    var svg = document.getElementById('qr-code').querySelector('img');
    svg.style.fill = color;
  });
  