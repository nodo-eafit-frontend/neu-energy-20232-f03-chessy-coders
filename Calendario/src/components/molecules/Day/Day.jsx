import React from 'react';
import Label from '../../atoms/Label/Label';
import Cell from '../../atoms/Cell/Cell';
import energyData from '../../consumo_energia.json';
import './Day.css';

const Day = () => {
  // Accede a los datos de consumo de energía
  const monthlyData = energyData[0].months[0];

  const daysOfMonth = monthlyData.días.map(dayData => dayData.día);
  const hours = monthlyData.días[0].hora_x_energía.map((_, index) => index + 1);

  return (
    <div className="day-container">
      <div className="labels">
        {daysOfMonth.map(day => (
          <Label key={day} text={day.toString()} />
        ))}
      </div>
      <div className="cells">
        {hours.map(hour => (
          <Cell key={hour} consumption={monthlyData.días[0].hora_x_energía[hour - 1]} />
        ))}
      </div>
    </div>
  );
};

export default Day;
