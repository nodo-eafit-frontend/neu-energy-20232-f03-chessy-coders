import React from 'react';
import Label from '../../atoms/Label/Label';
import Cell from '../../atoms/Cell/Cell';
import energyData from '../../consumo_energia.json';
import '../Day/Day.css';

const Month = () => {
  // Accede a los datos de consumo de energía
  const monthlyData = energyData[0].months[0];

  const daysOfMonth = monthlyData.días.map((dayData) => dayData.día);
  const hours = monthlyData.días[0].hora_x_energía.map((_, index) => index + 1);

  return (
    <>
      <Day />
      <Day />
      <Day />
      <Day />
      <Day />
    </>
  );
};

export default Day;
