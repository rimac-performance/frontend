import React from "react";

const VCUVehicleSTValue = 4;

const VCUVehicleST = () => {
  return (
    <div className="section">
      <h2 className="black heading2center">VCU Vehicle ST</h2>
      <div className="chart">
        <div className="black temp">{VCUVehicleSTValue}</div>
      </div>
    </div>
  );
};

export default VCUVehicleST;
