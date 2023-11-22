import React, { useState } from 'react';
import DatePicker from './components/organism/Datepicker/Datepicker';
import Table from './components/organism/Table/Table';
import energyData from './components/consumo_energia.json';
import './App.css'; // Asegúrate de importar tu archivo de estilos aquí

const App = () => {
  const currentYear = new Date().getFullYear();
  const [selectedDay, setSelectedDay] = useState(null);

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  return (
    <>
      <DatePicker />
      <Table />
    </>
  );
};

export default App;
