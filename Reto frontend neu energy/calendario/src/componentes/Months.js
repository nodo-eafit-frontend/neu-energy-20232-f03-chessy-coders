import React from 'react';
import './Months.css';

const months = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

function Months({ selectedMonth, onMonthChange }) {
  return (
    <div className="months-container">
      {months.map((month) => (
        <button
          key={month}
          onClick={() => onMonthChange(month)}
          className={selectedMonth === month ? 'active' : ''}
        >
          {month}
        </button>
      ))}
    </div>
  );
}

export default Months;
