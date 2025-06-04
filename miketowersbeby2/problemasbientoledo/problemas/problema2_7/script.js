
function calcular() {
  const km = parseFloat(document.getElementById('km').value);
  const precioKm = parseFloat(document.getElementById('precioKm').value);
  const total = km * precioKm;
  document.getElementById('resultado').innerText = `Costo del boleto: $${total.toFixed(2)}`;
}