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
                <Hours className="hours"/>
            <div className="main-table">
                <div className='month-table'>
                    <Month className="month" days={days} month={currentDate.getMonth()} />
                </div>
            </div>
        </div>
    );
};

export default Table;
