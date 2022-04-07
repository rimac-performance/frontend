import React from "react";

const ambientTemp = 48;

const AmbientTemp = () => {
  return (
    <div className="section">
      <h2 className="black heading2center">Ambient Temperature</h2>
      <div className="chart">
        <div className="black temp">{ambientTemp}°</div>
      </div>
    </div>
  );
};

export default AmbientTemp;
