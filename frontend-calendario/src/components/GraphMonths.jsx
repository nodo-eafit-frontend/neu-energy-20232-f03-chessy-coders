// En GraphMonths.jsx
import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import './GraphMonths.css';

const GraphMonths = () => {
  const months = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  const navigate = useNavigate();

  const getNumberOfDaysInMonth = (year, month) => {
    const lastDayOfMonth = new Date(year, month + 1, 0);
    return lastDayOfMonth.getDate();
  };

  const handleMonthClick = (index) => {
    const currentYear = new Date().getFullYear();
    const numberOfDaysInMonth = getNumberOfDaysInMonth(currentYear, index - 1);
    navigate(`/table/${index}/${numberOfDaysInMonth}`);
  };

  return (
    <div>
      <div className="buttons-container">
        {months.map((month, index) => (
          <Link key={index} to={`/table/${index + 1}`}>
            <button onClick={() => handleMonthClick(index + 1)}>
              {month}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GraphMonths;
