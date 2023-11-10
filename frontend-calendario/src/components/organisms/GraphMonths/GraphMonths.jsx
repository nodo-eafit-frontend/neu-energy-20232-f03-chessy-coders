import React from 'react';
import MonthButton from '../../molecules/MonthButton/MonthButton';
import './GraphMonths.css';

const GraphMonths = () => {
  const handleMonthClick = (index) => {
    const currentYear = new Date().getFullYear();
    const numberOfDaysInMonth = getNumberOfDaysInMonth(currentYear, index - 1);
    navigate(`/table/${index}/${numberOfDaysInMonth}`);
  };

  return (
    <div>
      <div className="buttons-container">
        {Array.from({ length: 12 }, (_, index) => (
          <MonthButton key={index} index={index} onClick={handleMonthClick} />
        ))}
      </div>
    </div>
  );
};

export default GraphMonths;
