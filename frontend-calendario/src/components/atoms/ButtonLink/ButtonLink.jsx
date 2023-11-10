import React from 'react';
import { Link } from 'react-router-dom';

const ButtonLink = ({ to, text, onClick, isActive }) => (
  <Link to={to}>
    <button className={`button ${isActive ? 'active' : ''}`} onClick={onClick}>
      {text}
    </button>
  </Link>
);

export default ButtonLink;
