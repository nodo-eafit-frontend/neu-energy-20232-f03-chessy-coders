import React, { useState } from 'react';
import DatePicker from './components/organism/Datepicker/Datepicker';
import Table from './components/organism/Table/Table';
import energyData from './components/consumo_energia.json';
import './App.css';  // Asegúrate de importar tu archivo de estilos aquí

const App = () => {
  const currentYear = new Date().getFullYear();
  const [selectedDay, setSelectedDay] = useState(null);

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Graficas</h1>
        <DatePicker year={currentYear} energyData={energyData} />
      </header>
      <main className="app-main">
        <Table year={currentYear} energyData={energyData} onDayClick={handleDayClick} />
      </main>
    </div>
  );
};

export default App;
