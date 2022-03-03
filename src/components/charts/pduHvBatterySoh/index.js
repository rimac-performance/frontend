import React from "react";

const pduHvBatterySoh = 98;

const PDUHVBatterySOH = () => {
  return (
    <div className="section">
      <h2 className="black heading2center">PDU HV battery SOH</h2>
      <div className="chart">
        <div className="black temp">{pduHvBatterySoh}%</div>
      </div>
    </div>
  );
};

export default PDUHVBatterySOH;
