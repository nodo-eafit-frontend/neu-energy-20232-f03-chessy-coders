const fs = require('fs');

function generarConsumoAleatorio() {
  return Array.from({ length: 24 }, () => Math.floor(Math.random() * (180 - 50 + 1)) + 50);
}

function generarDatosDia() {
  return Array.from({ length: 31 }, (_, index) => ({
    día: index + 1,
    hora_x_energía: generarConsumoAleatorio(),
  }));
}

function generarDatosMes(mes) {
  return {
    mes: mes,
    días: generarDatosDia(),
  };
}

function generarDatosAño(año) {
  return {
    year: año,
    months: Array.from({ length: 12 }, (_, index) => generarDatosMes(index + 1)),
  };
}

function generarDatosJSON() {
  const años = [2022, 2023, 2024, 2025];
  return años.map(año => generarDatosAño(año));
}

const datosJSON = generarDatosJSON();

fs.writeFile('consumo_energia.json', JSON.stringify(datosJSON, null, 2), err => {
  if (err) {
    console.error('Error al escribir el archivo:', err);
  } else {
    console.log('Archivo generado exitosamente: consumo_energia.json');
  }
});

