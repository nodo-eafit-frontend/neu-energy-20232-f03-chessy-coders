import React from 'react';
import Day from '../../molecules/Day/Day';

const Month = ({ days, month }) => {
    return (
        <div className='Month-container'>
            {days.map((day, index) => <Day day={day} key={`day_${month}_${index}`} />)}
        </div>
    );
};

export default Month;
