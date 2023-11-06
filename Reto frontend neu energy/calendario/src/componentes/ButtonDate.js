import React, { useState } from 'react';
import './ButtonDate.css';

const yearsData = ['2020', '2021', '2022', '2023'];

const monthsData = [
  {
    name: 'Enero',
    days: 31,
  },
  {
    name: 'Febrero',
    days: 28,
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

const daysData = [...Array(31).keys()].map((day) => (day + 1).toString());

function ButtonDate({ onYearSelected, activeButton, onButtonChange, selectedYear, selectedMonth, selectedDay, setSelectedMonth, setSelectedDay }) {
  const handleButtonClick = (buttonType) => {
    onButtonChange(buttonType);
  };

  const handleMonthChange = (month) => {
    setSelectedMonth(month);
    onButtonChange('day'); // Cambia a la vista de día al seleccionar un mes.
  }

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
        <select onChange={(e) => onYearSelected(e.target.value)} value={selectedYear}>
          {yearsData.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      )}
      {activeButton === 'month' && (
        <div className="select-container">
          {monthsData.map((month) => (
            <button
              key={month.name}
              className={`month-button ${selectedMonth === month.name ? 'active' : ''}`}
              onClick={() => handleMonthChange(month.name)}
            >
              {month.name}
            </button>
          ))}
        </div>
      )}
      {activeButton === 'day' && (
        <select onChange={(e) => setSelectedDay(e.target.value)} value={selectedDay}>
          {daysData.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default ButtonDate;
