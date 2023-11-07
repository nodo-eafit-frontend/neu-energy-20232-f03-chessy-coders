// ButtonDate.js
import React from 'react';
import './ButtonDate.css';

const yearsData = ['2020', '2021', '2022', '2023'];
const monthsData = [
  {
    name: 'Enero',
    days: 31,
  },
  {
    name: 'Febrero',
    days: 28, // 29 en años bisiestos
  },
  {
    name: 'Marzo',
    days: 31,
  },
  {
    name: 'Abril',
    days: 30,
  },
  {
    name: 'Mayo',
    days: 31,
  },
  {
    name: 'Junio',
    days: 30,
  },
  {
    name: 'Julio',
    days: 31,
  },
  {
    name: 'Agosto',
    days: 31,
  },
  {
    name: 'Septiembre',
    days: 30,
  },
  {
    name: 'Octubre',
    days: 31,
  },
  {
    name: 'Noviembre',
    days: 30,
  },
  {
    name: 'Diciembre',
    days: 31,
  },
];

function ButtonDate({
  onYearChange,
  activeButton,
  onButtonChange,
  selectedYear,
  setSelectedMonth,
}) {
  const handleButtonClick = (buttonType) => {
    onButtonChange(buttonType);
    setSelectedMonth('Enero'); // Restablecer el mes seleccionado al cambiar de botón.
  };

  return (
    <div className="button-container">
      <button
        className={`button ${activeButton === 'day' ? 'active' : ''}`}
        id="dayButton"
        onClick={() => handleButtonClick('day')}
      >
        Día
      </button>
      <button
        className={`button ${activeButton === 'month' ? 'active' : ''}`}
        id="monthButton"
        onClick={() => handleButtonClick('month')}
      >
        Mes
      </button>
      <button
        className={`button ${activeButton === 'year' ? 'active' : ''}`}
        id="yearButton"
        onClick={() => handleButtonClick('year')}
      >
        Año
      </button>
      {activeButton === 'year' && (
        <select onChange={(e) => onYearChange(e.target.value)} value={selectedYear}>
          {yearsData.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default ButtonDate;
