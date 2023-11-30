const { leerJsonEnergia } = require('../../utils/json-update');
require('dotenv').config();
const { ENERGY_PATH } = process.env;

const readEnergy = (req, res) => {
  const { year, month } = req.params;

  try {
    // Zona segura
    const consumo = leerJsonEnergia(ENERGY_PATH);

    const yearFound = consumo.find((item) => item.year === +year);
    const monthFound = yearFound.months.find((item) => item.mes === +month);

    // TODO:
    // 1: Crear método que retorne el valor de enregía más grande getMaxEnergy(monthFound): number

    const getMaxEnergy = (monthData) => {
      let maxEnergy = 0;
    
      monthData.days.forEach((day) => {
        day.consumption_hour.forEach((hour) => {
          if (hour.energy > maxEnergy) {
            maxEnergy = hour.energy;
          }
        });
      });
    
      return maxEnergy;
    };

    // 2: Modificar la respuesta de las horas, agregando el atributo de porcentaje injectEnergyPercent(monthFound, maxEnergy): monthFoundModified

    const getConsuptionHour = (hours, maxEnergy) => {
      const consumption_hour = hours.map((energy) => {
        return { energy, percent: energy / maxEnergy };
      });
    
      return consumption_hour;
    };
    
    const injectEnergyPercent = (consumoMensual, maxEnergy) => {
      const daysModified = consumoMensual.days.map((item) => {
        const consumption_hour = getConsuptionHour(item.hours, maxEnergy);
    
        return { day: item.day, consumption_hour };
      });
    
      return daysModified;
    };

    const consumoMensual = {
      year,
      month,
      days: monthFound.días,
    };

    if (monthFound) {
      res.status(200).send(consumoMensual);
    } else {
      res.status(404).send({});
    }
  } catch (error) {
    // Atrapamos el error
    console.error(error);
    res.status(500).send({});
  }
};

module.exports = { readEnergy };