import React from "react";

const pduHvBatteryVoltage = 705.5;

const PDUHVBatteryVoltage = () => {
  return (
    <div className="section">
      <h2 className="black heading2center">PDU HV battery voltage</h2>
      <div className="chart">
        <div className="black temp">{pduHvBatteryVoltage} volts</div>
      </div>
    </div>
  );
};

export default PDUHVBatteryVoltage;
