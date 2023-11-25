import React from 'react';
import Day from '../../molecules/Day/Day';

const Month = ({ days, month }) => {

    return (
        <div className='Month-container'>
            {days.map(day => <Day day={day} key={month + day["día"]}/>)}
        </div>
    );
};

export default Month;
