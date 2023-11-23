import React from 'react';

const namespace = 'label';

const Label = ({ text, className }) => {
  return <label className={`${namespace} ${className}`}>{text}</label>;
};

export default Label;
