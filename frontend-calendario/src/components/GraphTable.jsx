import React from 'react';
import './GraphTable.css';

function GraphTable({ consumoMensual, numberOfDays }) {
  const getColorClass = (consumo) => {
    if (consumo < 50) {
      return 'green';
    } else if (consumo >= 50 && consumo < 80) {
      return 'yellow';
    } else {
      return 'red';
    }
  };

  const hoursHeader = Array.from({ length: 24 }, (_, hora) => (
    <th key={hora}>{hora < 10 ? `0${hora}` : hora}</th>
  ));

  const tableRows = Array.from({ length: numberOfDays }, (_, dia) => (
    <tr key={dia}>
      <th>Día {dia + 1}</th>
      {Array.from({ length: 24 }, (_, hora) => (
        <td key={hora} className={getColorClass(consumoMensual[dia]?.[hora] || 0)}></td>
      ))}
    </tr>
  ));

  return (
    <table className="data-table graph-table">
      <thead>
        <tr>
          <th></th>
          {hoursHeader}
        </tr>
      </thead>
      <tbody>
        {tableRows}
      </tbody>
    </table>
  );
}

export default GraphTable;
