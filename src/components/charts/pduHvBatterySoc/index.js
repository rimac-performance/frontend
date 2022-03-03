import React from "react";

const pduHvBatterySoc = 83;

const PDUHVBatterySOC = () => {
  return (
    <div className="section">
      <h2 className="black heading2center">PDU HV battery SOC</h2>
      <div className="chart">
        <div className="black temp">{pduHvBatterySoc}%</div>
      </div>
    </div>
  );
};

export default PDUHVBatterySOC;
