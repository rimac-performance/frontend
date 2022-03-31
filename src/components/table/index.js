import React from "react";
import "./index.css";

const SensorName = "Odometer";
const Average = 26;
const Min = 22;
const Max = 28;

const BatterySensorName = "PDU HV battery SOC";
const BatteryStartHealth = 100;
const BatteryCurrentHealth = 22;

const BatteryConsumptionSensorName = "PDU HV battery";

const RealTableSensorDataExample = () => {
  return (
    <tr>
      <td>{SensorName}</td>
      <td>{Average} km/h</td>
      <td>{Min} km/h</td>
      <td>{Max} km/h</td>
    </tr>
  );
};

const BatteryHealthExample = () => {
  return (
    <tr>
      <td>{BatterySensorName}</td>
      <td>{BatteryStartHealth} %</td>
      <td>{BatteryCurrentHealth} %</td>
    </tr>
  );
};

const BatteryConsumptionExample = () => {
  return (
    <tr>
      <td>{BatteryConsumptionSensorName}</td>
      <td>{BatteryCurrentHealth} %</td>
      <td>{BatteryCurrentHealth} %</td>
      <td>{BatteryCurrentHealth} %</td>
    </tr>
  );
};

const Table = () => {
  return (
    <div>
      {/*TABLE 1*/}
      <div className="section">
        <h2 className="black heading2center">Car Data</h2>
      </div>
      <table>
        <tr>
          <th>Sensor</th>
          <th>Average</th>
          <th>Min</th>
          <th>Max</th>
        </tr>
        <RealTableSensorDataExample />
        <RealTableSensorDataExample />
        <RealTableSensorDataExample />
        <RealTableSensorDataExample />
        <RealTableSensorDataExample />
        <RealTableSensorDataExample />
      </table>
      {/*TABLE 2*/}
      <div className="section">
        <h2 className="black heading2center">Battery State of Health</h2>
      </div>
      <table>
        <tr>
          <th>Sensor</th>
          <th>Battery State of Health at Time of Purchase</th>
          <th>Current Battery State of Health</th>
        </tr>
        <BatteryHealthExample />
        <BatteryHealthExample />
        <BatteryHealthExample />
      </table>
      {/*TABLE 3*/}
      <div className="section">
        <h2 className="black heading2center">Battery Consumption</h2>
      </div>
      <table>
        <tr>
          <th>Sensor</th>
          <th>Battery Charged</th>
          <th>Battery Regenerative</th>
          <th>Battery Total</th>
        </tr>
        <BatteryConsumptionExample />
      </table>
    </div>
  );
};

export default Table;
