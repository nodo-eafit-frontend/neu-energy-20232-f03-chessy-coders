import React from 'react';

const ColorCell = ({ value }) => {
  const getColorClass = (consumo) => {
    if (consumo < 50) {
      return 'green';
    } else if (consumo >= 50 && consumo < 80) {
      return 'yellow';
    } else {
      return 'red';
    }
  };

  return <td className={getColorClass(value)}></td>;
};

export default ColorCell;
