import React from 'react';
import './Cell.scss';

const Cell = ({ consumo }) => {
    let colorClass;

    if (consumo < 100) {
        colorClass = 'green';
    } else if (consumo < 160) {
        colorClass = 'yellow';
    } else {
        colorClass = 'red';
    }

    return <div className={"cell " + colorClass}>{consumo}</div>;
};

export default Cell;
