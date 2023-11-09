const data = [
    {
      month: 1,
      consumoMensual: generateRandomConsumoArray(),
      numberOfDays: 31,
    },
    {
      month: 2,
      consumoMensual: generateRandomConsumoArray(),
      numberOfDays: 28,
    },
    {
      month: 3,
      consumoMensual: generateRandomConsumoArray(),
      numberOfDays: 31,
    },
    {
      month: 4,
      consumoMensual: generateRandomConsumoArray(),
      numberOfDays: 30,
    },
    {
      month: 5,
      consumoMensual: generateRandomConsumoArray(),
      numberOfDays: 31,
    },
    {
      month: 6,
      consumoMensual: generateRandomConsumoArray(),
      numberOfDays: 30,
    },
    {
      month: 7,
      consumoMensual: generateRandomConsumoArray(),
      numberOfDays: 31,
    },
    {
      month: 8,
      consumoMensual: generateRandomConsumoArray(),
      numberOfDays: 31,
    },
    {
      month: 9,
      consumoMensual: generateRandomConsumoArray(),
      numberOfDays: 30,
    },
    {
      month: 10,
      consumoMensual: generateRandomConsumoArray(),
      numberOfDays: 31,
    },
    {
      month: 11,
      consumoMensual: generateRandomConsumoArray(),
      numberOfDays: 30,
    },
    {
      month: 12,
      consumoMensual: generateRandomConsumoArray(),
      numberOfDays: 31,
    },
  ];
  
  function generateRandomConsumoArray() {
    return Array.from({ length: 24 }, () => Math.floor(Math.random() * 100));
  }
  
  export default data;
  