import React, { useState, useEffect } from 'react';
import './Cell.scss';

const Cell = ({ consumo }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [colorClass, setColorClass] = useState('');

  useEffect(() => {
    if (consumo.percent < 0.3) {
      setColorClass('grey');
    } else if (consumo.percent < 0.6) {
      setColorClass('lightGreen');
    } else if (consumo.percent < 0.9) {
      setColorClass('green');
    } else {
      setColorClass('yellow');
    }
  }, [consumo.percent]);

  return (
    <div
      className={`cell ${colorClass}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div className='hover-info'>
          <p>{consumo.energy} W</p>
        </div>
      )}
    </div>
  );
};

export default Cell;
