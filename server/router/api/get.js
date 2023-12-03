const { leerJsonEnergia } = require('../../utils/json-update');
const { getMaxEnergy, injectEnergyPercent } = require('../../controllers/getEnergyFunctions')
require('dotenv').config();
const { ENERGY_PATH } = process.env;

const readEnergy = (req, res) => {
    const { year, month } = req.params;

    try {
        // Zona segura
        const consumo = leerJsonEnergia(ENERGY_PATH);

        const yearFound = consumo.find(item => item.year === +year);
        const monthFound = yearFound.months.find(item => item.month === +month);

        // TODO:
        // 1: Crear método que retorne el valor de energía más grande getMaxEnergy(monthFound): number
        const maxEnergy = getMaxEnergy(monthFound);
        // 2: Modificar la respuesta de las horas, agregando el atributo de porcentaje injectEnergyPercent(monthFound, maxEnergy): monthFoundModified
        const days = injectEnergyPercent(monthFound, maxEnergy);

        const consumoMensual = {
            year,
            month,
            days
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
