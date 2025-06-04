
function calcular() {
  const anio = parseInt(document.getElementById('anioNacimiento').value);
  const edad = new Date().getFullYear() - anio;
  document.getElementById('resultado').innerText = `Edad: ${edad} años`;
}