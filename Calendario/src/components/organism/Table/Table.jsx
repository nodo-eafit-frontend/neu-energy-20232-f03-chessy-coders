import React from 'react';
import Label from '../../atoms/Label/Label';
import Hours from '../../atoms/Hours/Hours';
import Month from '../../molecules/Month/Month';
import './Table.scss';

const Day = () => {

  return (
    <>
      <Label className='hour' text='Hora'/>
      <Label className='day' text='Dia'/>
      <Hours className='hours'/>
      <Month className='month'/>
    </>
  );
};

export default Day;
