import React from 'react';
import {Cell, Label}  from '../../atoms';

export const Day = ({ day }) => {
    return (
        <div className="day-container">
            <Label text={day.day} className="label__days"/>
            {day["hora_x_energía"].map((consumo, index) => (
                <Cell key={`cell_${index}`} consumo={consumo} />
            ))}
        </div>
    );
};


