
function calcular() {
  const a = parseFloat(document.getElementById('a').value);
  const b = parseFloat(document.getElementById('b').value);
  const c = Math.sqrt(a*a + b*b);
  document.getElementById('resultado').innerText = `Hipotenusa: ${c.toFixed(2)}`;
}