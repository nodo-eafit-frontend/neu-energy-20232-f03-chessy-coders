import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { currentYear, minYear } from '../../../constants';

export const DatePicker = ({ initialDate, handleDateChange }) => {
  useEffect(() => {
    handleDateChange(initialDate);
  }, [initialDate, handleDateChange]);

  const inputValue = initialDate.toISOString().slice(0, 7);

  return (
    <div className="DatePickerContainer">
      <input
        className="DatePickerInput"
        type="month"
        value={inputValue}
        min={`${minYear}-01`}
        max={`${currentYear}-12`}
        onChange={(e) => handleDateChange(new Date(e.target.value))}
      />
    </div>
  );
};

DatePicker.propTypes = {
  initialDate: PropTypes.instanceOf(Date),
  handleDateChange: PropTypes.func.isRequired,
};
