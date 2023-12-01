import React, { useState } from 'react';
import './Cell.scss';

const Cell = ({ consumo }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { watts, percentage } = consumo;
  let colorClass;

  // TODO: Pasarlo a un método que retorne el string de la clase
  if (percentage < 0.25) {
    colorClass = 'grey';
  } else if (percentage < 0.5) {
    colorClass = 'lightGreen';
  } else if (percentage < 0.75) {
    colorClass = 'green';
  } else {
    colorClass = 'yellow';
  }

  return (
    <div
      className={`cell ${colorClass}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div className='hover-info'>
          <p>{watts} W</p>
        </div>
      )}
    </div>
  );
};

export default Cell;
