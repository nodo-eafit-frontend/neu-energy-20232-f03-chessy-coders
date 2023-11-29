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
    // 2: Modificar la respuesta de las horas, agregando el atributo de porcentaje injectEnergyPercent(monthFound, maxEnergy): monthFoundModified

    /*
    days: [
      {
        day: 1,
        consumption_hour: [
          { energy: 192, percent: 0.7 },
          { energy: 92, percent: 0.45 },
          { energy: 137, percent: 0.7 },
        ]
      },
      {...},
      {...}
    ] */

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
