import React from 'react';
import Label from '../../atoms/Label/Label';
import Hours from '../../molecules/Hours/Hours';
import Month from '../../molecules/Month/Month';
import './Table.scss';

const Table = ({ days }) => {
  return (
    <div className='tabla'>
      <Label className='label__title' text='Hora' />
      <Hours className='hours' />
      <Label className='label__title label--spin' text='Dia' />
      <Month className='month' />
    </div>
  );
};

export default Table;
