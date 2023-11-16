const data = [
    {
      month: 1,
      consumoMensual: generateRandomConsumoArray(),
      numberOfDays: 31,
      numberOfHoursPerDay: 24,
    },
    {
      month: 2,
      consumoMensual: generateRandomConsumoArray(),
      numberOfDays: 28,
      numberOfHoursPerDay: 24,
    },
    {
      month: 3,
      consumoMensual: generateRandomConsumoArray(),
      numberOfDays: 31,
      numberOfHoursPerDay: 24,
    },
    {
      month: 4,
      consumoMensual: generateRandomConsumoArray(),
      numberOfDays: 30,
      numberOfHoursPerDay: 24,
    },
    {
      month: 5,
      consumoMensual: generateRandomConsumoArray(),
      numberOfDays: 31,
      numberOfHoursPerDay: 24,
    },
    {
      month: 6,
      consumoMensual: generateRandomConsumoArray(),
      numberOfDays: 30,
      numberOfHoursPerDay: 24,
    },
    {
      month: 7,
      consumoMensual: generateRandomConsumoArray(),
      numberOfDays: 31,
      numberOfHoursPerDay: 24,
    },
    {
      month: 8,
      consumoMensual: generateRandomConsumoArray(),
      numberOfDays: 31,
      numberOfHoursPerDay: 24,
    },
    {
      month: 9,
      consumoMensual: generateRandomConsumoArray(),
      numberOfDays: 30,
      numberOfHoursPerDay: 24,
    },
    {
      month: 10,
      consumoMensual: generateRandomConsumoArray(),
      numberOfDays: 31,
      numberOfHoursPerDay: 24,
      
    },
    {
      month: 11,
      consumoMensual: generateRandomConsumoArray(),
      numberOfDays: 30,
      numberOfHoursPerDay: 24,
    },
    {
      month: 12,
      consumoMensual: generateRandomConsumoArray(),
      numberOfDays: 31,
      numberOfHoursPerDay: 24,
    },
  ];
  
  function generateRandomConsumoArray() {
    return Array.from({ length: 24 }, () => Math.floor(Math.random() * 100));
  }
  
  export default data;


  