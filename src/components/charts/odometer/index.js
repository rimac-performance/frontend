import React from "react";

const odometer = 6257;

const Odometer = () => {
  return (
    <div className="section">
      <h2 className="black heading2center">Odometer - Vehicle Mileage</h2>
      <div className="chart">
        <div className="black temp">{odometer} km</div>
      </div>
    </div>
  );
};

export default Odometer;
