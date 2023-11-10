import React from 'react';
import GraphTable from '../../organisms/GraphTable/GraphTable';

const GraphYear = ({ data }) => {
  return (
    <div className="year-container">
      <h1>Año Completo</h1>
      {data.map((monthData, index) => (
        <div key={index}>
          <h2>{`Mes ${index + 1}`}</h2>
          <GraphTable data={monthData} />
        </div>
      ))}
    </div>
  );
};

export default GraphYear;
