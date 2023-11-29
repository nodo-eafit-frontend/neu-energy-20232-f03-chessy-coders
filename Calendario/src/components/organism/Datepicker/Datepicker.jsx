import React, { useEffect } from 'react';
import ReactDatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
import 'react-datepicker/dist/react-datepicker.css';

registerLocale('es', es);

export const DatePicker = ({ initialDate, handleDateChange }) => {
  useEffect(() => {
    handleDateChange(initialDate);
  }, [initialDate, handleDateChange]);

  // TODO: Utilizar Date Month desde el HTML
  return (
    <ReactDatePicker
      showMonthYearPicker
      selected={initialDate}
      onChange={(date) => handleDateChange(date)}
      locale='es'
      dateFormat='MM/yyyy'
    />
  );
};

DatePicker.propTypes = {
  initialDate: PropTypes.instanceOf(Date),
  handleDateChange: PropTypes.func.isRequired,
};
