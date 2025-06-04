// Problema 3.1
function verificarVoto() {
  const edad = document.getElementById("edad3_1").value;
  const mensaje = document.getElementById("resultado3_1");

  if (edad >= 18) {
    mensaje.innerHTML = "Puedes votar en las próximas elecciones.";
  } else {
    mensaje.innerHTML = "No puedes votar en las próximas elecciones.";
  }
}
//3.2
function calcularSueldo() {
  console.log("función calcularSueldo llamada");  // Para ver si se llama la función
  let horas = Number(document.getElementById('horas').value);
  let pago = Number(document.getElementById('pago').value);
  let resultado = document.getElementById('resultado');

  console.log('Horas:', horas, 'Pago:', pago);

  if (isNaN(horas) || horas < 0) {
    resultado.textContent = 'Ingresa un número válido para las horas.';
    return;
  }

  if (isNaN(pago) || pago < 0) {
    resultado.textContent = 'Ingresa un número válido para el pago por hora.';
    return;
  }

  if (horas <= 40) {
    resultado.textContent = 'Sueldo: $' + (horas * pago);
  } else {
    let extra = horas - 40;
    resultado.textContent = 'Sueldo: $' + ((40 * pago) + (extra * pago * 2));
  }
}


// Problema 3.3
function elegirRegalo() {
  const dinero = parseFloat(document.getElementById("dinero3_3").value);
  const resultado = document.getElementById("resultado3_3");

  if (dinero <= 10) {
    resultado.innerHTML = "Puedes comprar una tarjeta.";
  } else if (dinero <= 100) {
    resultado.innerHTML = "Puedes comprar chocolates.";
  } else if (dinero <= 250) {
    resultado.innerHTML = "Puedes comprar flores.";
  } else {
    resultado.innerHTML = "Puedes comprar un anillo.";
  }
}
// Problema 3.4
function calcularEstacionamiento() {
  const horas = parseInt(document.getElementById("horas3_4").value);
  const resultado = document.getElementById("resultado3_4");
  let total = 0;

  if (horas <= 2) {
    total = horas * 5;
  } else if (horas <= 5) {
    total = (2 * 5) + ((horas - 2) * 4);
  } else if (horas <= 10) {
    total = (2 * 5) + (3 * 4) + ((horas - 5) * 3);
  } else {
    total = (2 * 5) + (3 * 4) + (5 * 3) + ((horas - 10) * 2);
  }

  resultado.innerHTML = "Total a pagar: $" + total.toFixed(2);
}
// Problema 3.5
function menorEdad() {
  const nombre1 = document.getElementById("nombre1_3_5").value;
  const edad1 = parseInt(document.getElementById("edad1_3_5").value);

  const nombre2 = document.getElementById("nombre2_3_5").value;
  const edad2 = parseInt(document.getElementById("edad2_3_5").value);

  const nombre3 = document.getElementById("nombre3_3_5").value;
  const edad3 = parseInt(document.getElementById("edad3_3_5").value);

  let menorNombre = nombre1;
  let menorEdad = edad1;

  if (edad2 < menorEdad) {
    menorNombre = nombre2;
    menorEdad = edad2;
  }

  if (edad3 < menorEdad) {
    menorNombre = nombre3;
    menorEdad = edad3;
  }

  document.getElementById("resultado3_5").innerHTML =
    "La persona más joven es " + menorNombre + " con " + menorEdad + " años.";
}
// Problema 3.6
function calcularDescuento() {
  const precio = parseFloat(document.getElementById("precio3_6").value);
  const resultado = document.getElementById("resultado3_6");
  let descuento = 0;

  if (precio >= 200) {
    descuento = 0.15;
  } else if (precio > 100) {
    descuento = 0.12;
  } else {
    descuento = 0.10;
  }

  const montoDescuento = precio * descuento;
  const total = precio - montoDescuento;

  resultado.innerHTML =
    "Descuento aplicado: $" + montoDescuento.toFixed(2) + "<br>" +
    "Precio final: $" + total.toFixed(2);
}
// Problema 3.7
function asignarBeca() {
  const edad = parseInt(document.getElementById("edad3_7").value);
  const promedio = parseFloat(document.getElementById("promedio3_7").value);
  const resultado = document.getElementById("resultado3_7");
  let beca = 0;

  if (edad > 18) {
    if (promedio >= 9) {
      beca = 2000;
    } else if (promedio >= 7.5) {
      beca = 1000;
    } else if (promedio >= 6) {
      beca = 500;
    } else {
      beca = 0;
    }
  } else {
    if (promedio >= 9) {
      beca = 3000;
    } else if (promedio >= 8) {
      beca = 2000;
    } else if (promedio >= 6) {
      beca = 100;
    } else {
      beca = 0;
    }
  }

  if (beca > 0) {
    resultado.innerHTML = "La beca asignada es de $" + beca.toFixed(2);
  } else {
    resultado.innerHTML = "Se enviará una carta de invitación para mejorar su desempeño.";
  }
}
// Problema 3.8
function calcularBono() {
  const antiguedad = parseInt(document.getElementById("antiguedad3_8").value);
  const sueldo = parseFloat(document.getElementById("sueldo3_8").value);
  const resultado = document.getElementById("resultado3_8");

  let bonoAntiguedad = 0;
  let bonoSueldo = 0;

  if (antiguedad > 2 && antiguedad < 5) {
    bonoAntiguedad = sueldo * 0.20;
  } else if (antiguedad >= 5) {
    bonoAntiguedad = sueldo * 0.30;
  }

  if (sueldo < 1000) {
    bonoSueldo = sueldo * 0.25;
  } else if (sueldo <= 3500) {
    bonoSueldo = sueldo * 0.15;
  } else {
    bonoSueldo = sueldo * 0.10;
  }

  const bonoFinal = bonoAntiguedad > bonoSueldo ? bonoAntiguedad : bonoSueldo;

  resultado.innerHTML = "El bono asignado es: $" + bonoFinal.toFixed(2);
}
// Problema 3.9
function calcularCostoPoliza() {
  const tipoPoliza = document.getElementById("tipoPoliza3_9").value;
  const bebeAlcohol = document.getElementById("bebeAlcohol3_9").value.toLowerCase();
  const usaLentes = document.getElementById("usaLentes3_9").value.toLowerCase();
  const tieneEnfermedad = document.getElementById("tieneEnfermedad3_9").value.toLowerCase();
  const edad = parseInt(document.getElementById("edad3_9").value);

  const resultado = document.getElementById("resultado3_9");

  let costoBase = 0;
  if (tipoPoliza === "A") {
    costoBase = 1200;
  } else {
    costoBase = 950;
  }

  let porcentajeCargo = 0;
  if (bebeAlcohol === "sí") {
    porcentajeCargo += 0.10;
  }
  if (usaLentes === "sí") {
    porcentajeCargo += 0.05;
  }
  if (tieneEnfermedad === "sí") {
    porcentajeCargo += 0.05;
  }
  if (edad > 40) {
    porcentajeCargo += 0.20;
  } else {
    porcentajeCargo += 0.10;
  }

  const costoTotal = costoBase + (costoBase * porcentajeCargo);

  resultado.innerHTML = "El costo total de la póliza es: $" + costoTotal.toFixed(2);
}
// Problema 3.10
function calcularDestino() {
  const costoKm = parseFloat(document.getElementById("costoKm3_10").value);
  const presupuesto = parseFloat(document.getElementById("presupuesto3_10").value);
  const resultado = document.getElementById("resultado3_10");

  const costoMexico = 2 * 750 * costoKm;
  const costoPV = 2 * 800 * costoKm;
  const costoAcapulco = 2 * 1200 * costoKm;
  const costoCancun = 2 * 1800 * costoKm;

  let destino = "";

  if (presupuesto >= costoCancun) {
    destino = "Cancún";
  } else if (presupuesto >= costoAcapulco) {
    destino = "Acapulco";
  } else if (presupuesto >= costoPV) {
    destino = "Puerto Vallarta";
  } else if (presupuesto >= costoMexico) {
    destino = "México";
  } else {
    destino = "Quedarse en casa";
  }

  resultado.textContent = "Puede ir a: " + destino;
}
// Problema 3.11
function calcularBono() {
  const antiguedad = parseInt(document.getElementById("antiguedad3_11").value);
  const resultado = document.getElementById("resultado3_11");

  let bono = 0;

  if (antiguedad >= 1 && antiguedad <= 5) {
    bono = antiguedad * 100;
  } else if (antiguedad > 5) {
    bono = 1000;
  } else {
    bono = 0;
  }

  resultado.textContent = "El bono que recibirá es: $" + bono;
}
// Problema 3.12
function calcularSueldo() {
  const horas = parseInt(document.getElementById("horas3_12").value);
  const pagoHora = parseFloat(document.getElementById("pagoHora3_12").value);
  const resultado = document.getElementById("resultado3_12");

  if (horas > 50) {
    resultado.textContent = "No está permitido trabajar más de 50 horas.";
    return;
  }

  let sueldo = 0;

  if (horas <= 40) {
    sueldo = horas * pagoHora;
  } else if (horas <= 45) {
    sueldo = 40 * pagoHora + (horas - 40) * pagoHora * 2;
  } else {
    sueldo = 40 * pagoHora + 5 * pagoHora * 2 + (horas - 45) * pagoHora * 3;
  }

  resultado.textContent = "El sueldo semanal es: $" + sueldo.toFixed(2);
}
// Problema 3.13
function calcularCostoPasaje() {
  const numeroAlumnos = parseInt(document.getElementById("alumnos3_13").value);
  const resultado = document.getElementById("resultado3_13");

  let costo = 0;

  if (numeroAlumnos > 100) {
    costo = 20;
  } else if (numeroAlumnos >= 50 && numeroAlumnos <= 100) {
    costo = 35;
  } else if (numeroAlumnos >= 20 && numeroAlumnos <= 49) {
    costo = 40;
  } else {
    costo = 70;
  }

  resultado.textContent = "El costo por alumno es: $" + costo;
}
