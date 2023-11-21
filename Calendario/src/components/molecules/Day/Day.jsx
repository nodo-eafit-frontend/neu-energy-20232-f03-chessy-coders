import React from 'react';
import Hours from '../../atoms/Hours/Hours';
import Label from '../../atoms/Label/Label';
import Cell from '../../atoms/Cell/Cell';
import energyData from '../../consumo_energia.json';
import './Table.scss';

// ...

// ...

const Day = () => {
  const monthlyData = energyData[0].months[0];
  const daysOfMonth = monthlyData.días.map(dayData => dayData.día);
  const hours = monthlyData.días[0].hora_x_energía.map((_, index) => index + 1);

  return (
    <div className="day-container" style={{ alignItems: 'flex-start' }}>
      <div className="labels">
        <Hours />
        {daysOfMonth.map(day => (
          <Label key={day} text={day.toString()} className="day-label" />
        ))}
      </div>
      <div className="cells">
        <div className="hour-item"></div> {/* Espacio para la hora */}
        {hours.map((hour, index) => (
          <React.Fragment key={hour}>
            <div className="hour-item">{hour}</div>
            {monthlyData.días.map(dayData => (
              <Cell key={`${dayData.día}-${hour}`} consumption={dayData.hora_x_energía[index]} />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

// ...

