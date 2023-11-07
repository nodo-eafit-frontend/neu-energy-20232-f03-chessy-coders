import React from 'react';

const years = ['2020', '2021', '2022', '2023'];

function Years({ selectedYear, onYearChange }) {
  return (
    <div className="years-container">
      {years.map(year => (
        <button
          key={year}
          onClick={() => onYearChange(year)}
          className={`year-button ${selectedYear === year ? 'active' : ''}`}
        >
          {year}
        </button>
      ))}
    </div>
  );
}

export default Years;
