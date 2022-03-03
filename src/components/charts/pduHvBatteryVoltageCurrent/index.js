import React from "react";

const pduHvBatteryVoltageCurrent = 10.7;

const PDUHVBatteryVoltageCurrent = () => {
  return (
    <div className="section">
      <h2 className="black heading2center">PDU HV battery voltage current</h2>
      <div className="chart">
        <div className="black temp">{pduHvBatteryVoltageCurrent} amps</div>
      </div>
    </div>
  );
};

export default PDUHVBatteryVoltageCurrent;
