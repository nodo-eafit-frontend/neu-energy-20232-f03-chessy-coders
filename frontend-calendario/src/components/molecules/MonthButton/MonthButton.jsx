import React from 'react';
import { Link } from 'react-router-dom';

const MonthButton = ({ index, onClick }) => (
  <Link to={`/table/${index + 1}`}>
    <button onClick={() => onClick(index + 1)}>{getMonthName(index)}</button>
  </Link>
);

const getMonthName = (index) => [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
][index];

export default MonthButton;
