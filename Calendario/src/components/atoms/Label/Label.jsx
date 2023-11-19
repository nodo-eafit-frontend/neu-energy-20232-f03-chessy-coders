import React from 'react';
import './Label.scss';

const Label = ({ text }) => {
  return <label className="generic-label">{text}</label>;
};

export default Label;
