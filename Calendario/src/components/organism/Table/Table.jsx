import React from 'react';
import Hours from '../../atoms/Hours/Hours';
import Label from '../../atoms/Label/Label';
import Cell from '../../atoms/Cell/Cell';
import energyData from '../../consumo_energia.json';
import './Table.scss';

const Day = () => {
  // Accede a los datos de consumo de energía
  const monthlyData = energyData[0].months[0];

  const daysOfMonth = monthlyData.días.map((dayData) => dayData.día);
  const hours = monthlyData.días[0].hora_x_energía.map((_, index) => index + 1);

  return (
    <>
      <Label />
      <Label />
      <Hours />
      <Month />
    </>
  );
};

export default Day;
