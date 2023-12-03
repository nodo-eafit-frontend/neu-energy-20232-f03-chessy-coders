const getMaxEnergy = monthFound => {
    let maxEnergy = 0;

    monthFound.days.forEach(day => {
        day.hora_x_energía.forEach(hour => {
            if (hour > maxEnergy) {
                maxEnergy = hour;
            }
        });
    });

    return maxEnergy;
};

const injectEnergyPercent = (consumoMensual, maxEnergy) => {
    consumoMensual.days.forEach(day => {
        day.hora_x_energía = day.hora_x_energía
            .map(value => ({ watts: value, percentage: value / maxEnergy }));
    });
    return consumoMensual.days;
};

module.exports = { getMaxEnergy, injectEnergyPercent };