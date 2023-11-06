import React from 'react';

function MonthList({ selectedMonth, handleMonthChange }) {
  const months = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  return (
    <div className="list-container">
      <h2>Selecciona un mes:</h2>
      <ul>
        {months.map((month) => (
          <li
            key={month}
            onClick={() => handleMonthChange(month)}
            className={selectedMonth === month ? 'active' : ''}
          >
            {month}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MonthList;
