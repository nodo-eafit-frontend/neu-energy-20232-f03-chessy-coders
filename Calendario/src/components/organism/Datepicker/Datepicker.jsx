import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
import 'react-datepicker/dist/react-datepicker.css';

registerLocale('es', es);

export const DatePicker = ({ initialDate, handleDateChange }) => {
  return (
    <ReactDatePicker
      showMonthYearPicker
      selected={initialDate}
      onChange={handleDateChange}
      locale='es'
      dateFormat='MM/yyyy'
    />
  );
};

DatePicker.propTypes = {
  initialDate: PropTypes.instanceOf(Date),
};


