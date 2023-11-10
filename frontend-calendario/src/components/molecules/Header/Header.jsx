import React, { useState } from 'react';
import ButtonLink from '../../atoms/ButtonLink/ButtonLink';
import './Header.css';

function Header() {
  const [activeButton, setActiveButton] = useState('Dia');

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
        <ButtonLink to="/table/1/31" text="Dia" isActive={activeButton === 'Dia'} onClick={() => handleButtonClick('Dia', '/table/1/31')} />
        <ButtonLink to="/meses" text="Mes" isActive={activeButton === 'Mes'} onClick={() => handleButtonClick('Mes', '/meses')} />
        <ButtonLink to="/year" text="Año" isActive={activeButton === 'Año'} onClick={() => handleButtonClick('Año', '/year')} />
      </div>
    </header>
  );
}

export default Header;
