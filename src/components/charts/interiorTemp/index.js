import React from "react";

const interiorTemp = 70;

const InteriorTemp = () => {
  return (
    <div className="section">
      <h2 className="black heading2center">Interior Temperature</h2>
      <div className="chart">
        <div className="black temp">{interiorTemp}°</div>
      </div>
    </div>
  );
};

export default InteriorTemp;
