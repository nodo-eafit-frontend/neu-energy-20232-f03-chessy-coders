import React from 'react';
import './Cell.scss';

const Cell = ({ consumption }) => {
  let colorClass;

  if (consumption < 100) {
    colorClass = 'green';
  } else if (consumption < 160) {
    colorClass = 'yellow';
  } else {
    colorClass = 'red';
  }

  return <div></div>;
};

export default Cell;
