
function calcular() {
  const pesos = parseFloat(document.getElementById('pesos').value);
  const tipoCambio = parseFloat(document.getElementById('tipoCambio').value);
  const dolares = pesos / tipoCambio;
  document.getElementById('resultado').innerText = `Dólares: $${dolares.toFixed(2)}`;
}