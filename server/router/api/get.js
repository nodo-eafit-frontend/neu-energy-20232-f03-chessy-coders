const fs = require('fs');
const readJson = require('../../utils/json-update');
require('dotenv').config();
const { ENERGY_PATH } = process.env;

const readEnergy = (req, res) => {
  const targetYear = Number(req.params.year);
  const targetMonth = req.params.month;

  try {
    // Zona segura
    const consumo = readJson.leerJsonEnergia(ENERGY_PATH);

    const consumoMensual = consumo.consumos.find((items) => items.year === targetYear && items.month === targetMonth);

    if (consumoMensual) {
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