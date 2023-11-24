import React from 'react';
import Day from '../../molecules/Day/Day';

const Month = ({ days, month }) => {

    return (
        <>
            {days.map(day => <Day day={day} key={month + day["día"]}/>)}
        </>
    );
};

export default Month;
