import React from 'react';
import Label from '../../atoms/Label/Label';
import Hours from '../../molecules/Hours/Hours';
import Month from '../../molecules/Month/Month';
import { TITLE_DAY, TITLE_HOUR } from '../../../constants/index'; 
import './Table.scss';

const Table = ({ days, currentDate }) => {
    return (
            <div className="tabla">
                <Label className="label__generic label__hour" text={TITLE_HOUR}/>
                <Label className="label__generic label__day" text={TITLE_DAY}/>
            <div className="main-table">
                <div className='hour-table'>
                    <Hours className="hours"/>
                </div>
                <div className='month-table'>
                    <Month className="month" days={days} currentDate={currentDate} />
                </div>
            </div>
        </div>
    );
};

export default Table;
