
function calcular() {
  const horas = Math.ceil(parseFloat(document.getElementById('horas').value));
  const tarifa = parseFloat(document.getElementById('tarifa').value);
  const total = horas * tarifa;
  document.getElementById('resultado').innerText = `Total a pagar: $${total}`;
}