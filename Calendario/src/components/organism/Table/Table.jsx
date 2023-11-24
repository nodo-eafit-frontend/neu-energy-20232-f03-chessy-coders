import React from 'react';
import Label from '../../atoms/Label/Label';
import Hours from '../../molecules/Hours/Hours';
import Month from '../../molecules/Month/Month';
import './Table.scss';

const Table = ({ days, month }) => {
    return (
        <div className="tabla">
            <Label className="label__generic label__hour" text="Hora"/>
            <Label className="label__generic label--spin" text="Dia"/>
            <div className="main-table">
                <Hours className="hours"/>
                <Month className="month" days={days} month={month}/>
            </div>
        </div>
    );
};

export default Table;
