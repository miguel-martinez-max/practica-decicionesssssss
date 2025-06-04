
function calcular() {
  const base = parseFloat(document.getElementById('base').value);
  const altura = parseFloat(document.getElementById('altura').value);
  const area = (base * altura) / 2;
  document.getElementById('resultado').innerText = `Área: ${area}`;
}