// App.js
import React, { useState } from 'react';
import './App.css';
import ButtonDate from './componentes/ButtonDate';
import HeatMapTable from './componentes/HeatMapTable';
import Months from './componentes/Months';
import Years from './componentes/Years';

function App() {
  const [activeButton, setActiveButton] = useState('day');
  const [selectedYear, setSelectedYear] = useState('2020');
  const [selectedMonth, setSelectedMonth] = useState('Enero');
  const [selectedDay, setSelectedDay] = useState('1');
  const [numberOfDays, setNumberOfDays] = useState(31);

  const handleButtonChange = (buttonType) => {
    setActiveButton(buttonType);
  };

  const handleYearChange = (year) => {
    setSelectedYear(year);
    if (year === '2020' || year === '2024') {
      setNumberOfDays(29);
    } else {
      setNumberOfDays(28);
    }
  };

  const handleMonthChange = (month) => {
    setSelectedMonth(month);
  };

  const consumoMensual = [
    [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    [20, 30, 40, 50, 60, 70, 80, 90, 100, 110],
    // Agrega más filas de datos aquí
  ];

  return (
    <div className="App">
      <header>
        <div className="title">Gráficas</div>
        <ButtonDate
          activeButton={activeButton}
          onButtonChange={handleButtonChange}
          selectedYear={selectedYear}
          setSelectedMonth={setSelectedMonth}
          onYearChange={handleYearChange}
        />
      </header>
      <main>
        {activeButton === 'day' && (
          <HeatMapTable
            consumoMensual={consumoMensual}
            numberOfDays={numberOfDays}
          />
        )}
        {activeButton === 'month' && (
          <Months
            selectedMonth={selectedMonth}
            onMonthChange={handleMonthChange}
          />
        )}
        {activeButton === 'year' && (
          <Years
            selectedYear={selectedYear}
            onYearChange={handleYearChange}
          />
        )}
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
