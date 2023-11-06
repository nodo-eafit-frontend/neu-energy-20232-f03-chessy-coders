import React from 'react';

function YearList({ selectedYear, handleYearChange }) {
  const years = ['2020', '2021', '2022', '2023', '2024']; // Agrega los años deseados

  return (
    <div className="list-container">
      <h2>Selecciona un año:</h2>
      <ul>
        {years.map((year) => (
          <li
            key={year}
            onClick={() => handleYearChange(year)}
            className={selectedYear === year ? 'active' : ''}
          >
            {year}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default YearList;
