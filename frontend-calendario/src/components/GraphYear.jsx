// GraphYear.jsx
import React from 'react';
import GraphTable from './GraphTable';

const GraphYear = ({ data }) => {
  return (
    <div className="year-container">
      <h1>Año Completo</h1>
      <GraphTable data={data[0]} /> {/* Mostrar solo la tabla del primer mes */}
    </div>
  );
};

export default GraphYear;
