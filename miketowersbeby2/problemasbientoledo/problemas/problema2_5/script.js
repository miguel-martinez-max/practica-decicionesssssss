
function calcular() {
  const m2 = parseFloat(document.getElementById('metros').value);
  const precio = parseFloat(document.getElementById('precio').value);
  const total = m2 * precio;
  document.getElementById('resultado').innerText = `Total: $${total}`;
}