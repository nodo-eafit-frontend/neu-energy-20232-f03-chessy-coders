import React from 'react';
import ColorCell from '../../atoms/ColorCell/ColorCell';
import './GraphTable.css';

function GraphTable({ data, numberOfDays }) {
  const hoursHeader = Array.from({ length: 24 }, (_, hora) => (
    <th key={hora}>{hora < 10 ? `0${hora}` : hora}</th>
  ));

  const tableRows = Array.from({ length: numberOfDays }, (_, dia) => (
    <tr key={dia}>
      <th>Día {dia + 1}</th>
      {Array.from({ length: 24 }, (_, hora) => (
        <ColorCell key={hora} value={data[dia]?.[hora] || 0} />
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
      <tbody>{tableRows}</tbody>
    </table>
  );
}

export default GraphTable;
