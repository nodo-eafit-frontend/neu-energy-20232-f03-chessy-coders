import React from 'react';
import './Hours.scss';

const Hours = () => {
  const hours = Array.from({ length: 25 }, (_, index) => index);

  return (
    <div className="hours-list">
      {hours.map(hour => (
        <div key={hour} className="hour-item">
          {String(hour).padStart(2, '0')}:00
        </div>
      ))}
    </div>
  );
};

export default Hours;
