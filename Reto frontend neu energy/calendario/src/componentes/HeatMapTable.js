import React from 'react';
import './HeatMapTable.css';

function HeatMapTable({ consumoMensual, numberOfDays }) {
  const getColorClass = (consumo) => {
    if (consumo < 50) {
      return 'green';
    } else if (consumo >= 50 && consumo < 80) {
      return 'yellow';
    } else {
      return 'red';
    }
  }

  const hoursHeader = Array.from({ length: 24 }, (_, hora) => (
    <th key={hora}>{hora < 10 ? `0${hora}` : hora}</th>
  ));

  return (
    <table className="data-table">
      <thead>
        <tr>
          <th></th>
          {hoursHeader}
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: numberOfDays }, (_, dia) => (
          <tr key={dia}>
            <th>Día {dia + 1}</th>
            {consumoMensual[dia] ? (
              consumoMensual[dia].map((consumo, hora) => (
                <td key={hora} className={getColorClass(consumo)}>
                  &nbsp;
                </td>
              ))
            ) : (
              <td></td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default HeatMapTable;
