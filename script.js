document.getElementById('confirmBtn').addEventListener('click', function () {
  const phone = '5491156144045';
  const message = encodeURIComponent('Confirmo que asistiré a la fiesta de Valentín. Mi nombre y apellido es:');
  const url = `https://api.whatsapp.com/send?phone=${phone}&text=${message}`;
  window.open(url, '_blank');
});