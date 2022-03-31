import React from "react";

const mileageTotal = 6249;

const Mileage = () => {
  return (
    <div className="section">
      <h2 className="black heading2center">Mileage</h2>
      <div className="chart">
        <div className="black temp">{mileageTotal} km</div>
      </div>
    </div>
  );
};

export default Mileage;
