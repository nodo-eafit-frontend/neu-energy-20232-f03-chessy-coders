import React from 'react';
import Label from '../../atoms/Label/Label';
import Hours from '../../molecules/Hours/Hours';
import Month from '../../molecules/Month/Month';
import './Table.scss';

const Day = () => {

  return (
    <div className='tabla'>
      <Label className='hour' text='Hora'/>
      <Hours className='hours'/>
      <Label className='day' text='Dia'/>
      <Month className='month'/>
    </div>
  );
};

export default Day;
