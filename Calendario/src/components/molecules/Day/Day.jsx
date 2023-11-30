import React from 'react';
import Cell from '../../atoms/Cell/Cell';
import Label from '../../atoms/Label/Label';
import './Day.scss';

const Day = ({ day }) => {
    return (
        <div className="day-container">
            <Label text={day["día"]} className="label__days"/>
            {day["hora_x_energía"].map((consumo, index) => (
                <Cell key={`cell_${index}`} consumo={consumo} />
            ))}
        </div>
    );
};


export default Day;
