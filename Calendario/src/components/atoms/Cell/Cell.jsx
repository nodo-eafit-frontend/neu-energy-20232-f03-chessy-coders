import React, { useState } from 'react';
import './Cell.scss';

const Cell = ({ consumo, porcentaje }) => {
  const [isHovered, setIsHovered] = useState(false);

  let colorClass;

  // TODO: Pasarlo a un método que retorne el string de la clase
  if (consumo < 100) {
    colorClass = 'grey';
  } else if (consumo < 130) {
    colorClass = 'lightGreen';
  } else if (consumo < 160) {
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
          <p>{consumo} w</p>
        </div>
      )}
    </div>
  );
};

export default Cell;
