import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
import 'react-datepicker/dist/react-datepicker.css';

registerLocale('es', es);

const MyDatePicker = ({ initialDate }) => {
  const [selectedDate, setSelectedDate] = useState(initialDate || new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <DatePicker
      showMonthYearPicker
      selected={selectedDate}
      onChange={handleDateChange}
      locale='es'
      dateFormat='MM/yyyy'
    />
  );
};

MyDatePicker.propTypes = {
  initialDate: PropTypes.instanceOf(Date),
};

export default MyDatePicker;
