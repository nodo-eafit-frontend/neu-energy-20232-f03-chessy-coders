import React from 'react';
import './Label.scss';

const namespace = 'label';

const Label = ({ text, className }) => {
  return <label className={`${namespace} ${className}`}>{text}</label>;
};

export default Label;
