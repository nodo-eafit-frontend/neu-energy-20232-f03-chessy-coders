import React, { useState } from 'react';
import DatePicker from './components/organism/Datepicker/Datepicker';
import Table from './components/organism/Table/Table';
import energyData from './components/consumo_energia.json';
import './App.css';

const App = () => {
  const currentYear = new Date().getFullYear();
  const [selectedDay, setSelectedDay] = useState(null);

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  return (
    <div className="app-container">
      <div className="app-header">
        <h1>Graficas</h1>
        <DatePicker year={currentYear} energyData={energyData} />
      </div>
      <div className="app-main">
        <Table year={currentYear} energyData={energyData} onDayClick={handleDayClick} />
      </div>
    </div>
  );
};

export default App;
