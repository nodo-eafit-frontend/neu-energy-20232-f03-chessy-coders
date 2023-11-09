// Header.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const [activeButton, setActiveButton] = useState('Dia');
  const navigate = useNavigate();

  const handleButtonClick = (button, route) => {
    setActiveButton(button);
    navigate(route);
  };

  return (
    <header>
      <h1>
        Graficas
        <button>+</button>
      </h1>
      <div className="button-container">
        <Link to="/table/1/31">
          <button
            className={`button ${activeButton === 'Dia' ? 'active' : ''}`}
            onClick={() => handleButtonClick('Dia', '/table/1/31')}
          >
            Dia
          </button>
        </Link>
        <Link to="/meses">
          <button
            className={`button ${activeButton === 'Mes' ? 'active' : ''}`}
            onClick={() => handleButtonClick('Mes', '/meses')}
          >
            Mes
          </button>
        </Link>
        <Link to="/year">
          <button
            className={`button ${activeButton === 'Año' ? 'active' : ''}`}
            onClick={() => handleButtonClick('Año', '/year')}
          >
            Año
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
