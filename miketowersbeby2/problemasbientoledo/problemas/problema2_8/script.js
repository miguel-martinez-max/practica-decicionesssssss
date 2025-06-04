
function calcular() {
  const distancia = parseFloat(document.getElementById('distancia').value);
  const velocidad = parseFloat(document.getElementById('velocidad').value);
  const tiempo = distancia / velocidad;
  document.getElementById('resultado').innerText = `Tiempo estimado: ${tiempo.toFixed(2)} horas`;
}