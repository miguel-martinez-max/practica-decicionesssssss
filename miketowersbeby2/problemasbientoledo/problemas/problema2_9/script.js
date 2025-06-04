
function calcular() {
  const minutos = parseFloat(document.getElementById('minutos').value);
  const precioMin = parseFloat(document.getElementById('precioMin').value);
  const total = minutos * precioMin;
  document.getElementById('resultado').innerText = `Costo total: $${total.toFixed(2)}`;
}