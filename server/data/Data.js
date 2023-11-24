const fs = require('fs');

// Función para generar un número aleatorio entre min y max
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const months = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);

const hoursInDay = Array.from({ length: 24 }, (_, i) => i + 1);

function generateDailyEnergy() {
  return hoursInDay.map(() => getRandomNumber(50, 200));
}

function generateMonthlyEnergy() {
  return daysInMonth.map(day => ({
    día: day,
    hora_x_energía: generateDailyEnergy()
  }));
}

function generateYearlyEnergy(year) {
  return {
    year: year,
    months: months.map((month, index) => ({
      mes: month,
      días: generateMonthlyEnergy()
    }))
  };
}

function generateEnergyData(startYear, endYear) {
  const energyData = [];

  for (let year = startYear; year <= endYear; year++) {
    energyData.push(generateYearlyEnergy(year));
  }

  return energyData;
}

const energyData = generateEnergyData(2022, 2025);

const jsonData = JSON.stringify(energyData, null, 2);

fs.writeFileSync('consumo_energia.json', jsonData);

console.log('Datos de consumo de energía generados y guardados en consumo_energia.json');
