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

const average = (array) => {
  try {
    return array.reduce((a, b) => a + b) / array.length;
  } catch (e) {
    console.error(e);
    return "";
  }
};

const RealTableSensorDataExample = ({ sensor, data }) => {
  const rawSensorData = data.map((item) => item[sensor.row]);
  const sensorData = rawSensorData.filter((item) => item !== null);

  const min = Math.min(...sensorData);
  const max = Math.max(...sensorData);
  const avg = average(sensorData);

  console.log({ sensorData, sensor: sensor.label });

  return (
    <tr>
      <td>{sensor.label}</td>
      <td>
        {avg} {sensor.unit}
      </td>
      <td>
        {min} {sensor.unit}
      </td>
      <td>
        {max} {sensor.unit}
      </td>
    </tr>
  );
};

const BatteryHealthExample = ({ sensor, data }) => {
  // return (
  //   <tr>
  //     <td>{BatterySensorName}</td>
  //     <td>{BatteryStartHealth} %</td>
  //     <td>{BatteryCurrentHealth} %</td>
  //   </tr>
  // );
  const rawSensorData = data.map((item) => item[sensor.row]);
  const sensorData = rawSensorData.filter((item) => item !== null);

  const min = Math.min(...sensorData);

  console.log({ sensorData, sensor: sensor.label });

  return (
    <tr>
      <td>{sensor.label}</td>
      <td>100%</td>
      <td>
        {min} {sensor.unit}
      </td>
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

const batterySensors = [
  {
    row: "mean_PDU_HV_LV_status:PDU_HV_battery_SOC",
    label: "PDU HV Battery SOC",
    unit: "%",
  },
  {
    row: "mean_PDU_HV_LV_status:PDU_HV_battery_SOH",
    label: "PDU HV Battery SOH",
    unit: "%",
  },
];

const sensors = [
  {
    row: "mean_HPI_FR_phase_curr_motor_temp:HPI_temp_motor1",
    label: "Front Right Motor 1 Temp",
    unit: "°C",
  },
  {
    row: "mean_HPI_FR_phase_curr_motor_temp:HPI_temp_motor2",
    label: "Front Right Motor 2 Temp",
    unit: "°C",
  },
  {
    row: "mean_HPI_FL_phase_curr_motor_temp:HPI_temp_motor1",
    label: "Front Left Motor 1 Temp",
    unit: "°C",
  },
  {
    row: "mean_PDU_HV_battery_performance:PDU_HV_battery_current",
    label: "PDU HV Battery Current",
    unit: "amps",
  },
  {
    row: "mean_PDU_HV_battery_performance:PDU_HV_battery_voltage",
    label: "PDU HV Battery Voltage",
    unit: "volts",
  },
  {
    row: "mean_SAFETY_PCU_vehicle_ST:PCU_vehicle_speed",
    label: "Vehicle Speed",
    unit: "km/h",
  },
  {
    row: "mean_SAFETY_PCU_vehicle_ST:PCU_accelerator_pedal",
    label: "PCU Accelerator Pedal",
    unit: "km/h",
  },
  {
    row: "mean_HPI_FR_inverter_temp:HPI_temp_IGBT3",
    label: "Front Right HPI Temp IGBT3",
    unit: "°C",
  },
  {
    row: "mean_HPI_FL_inverter_temp:HPI_temp_IGBT3",
    label: "Front Left HPI Temp IGBT3",
    unit: "°C",
  },
  {
    row: "mean_HPI_FL_inverter_temp:HPI_temp_IGBT2",
    label: "Front Left HPI Temp IGBT2",
    unit: "°C",
  },
  {
    row: "mean_HPI_FR_inverter_temp:HPI_temp_IGBT2",
    label: "Front Right HPI Temp IGBT2",
    unit: "°C",
  },
  {
    row: "mean_HPI_FL_inverter_temp:HPI_temp_IGBT1",
    label: "Front Left HPI Temp IGBT1",
    unit: "°C",
  },
  {
    row: "mean_HPI_FR_inverter_temp:HPI_temp_IGBT1",
    label: "Front Right HPI Temp IGBT1",
    unit: "°C",
  },
  {
    row: "mean_CCU_F_temp_1:CCU_F_ambient_temp",
    label: "Ambient Temperature",
    unit: "°C",
  },
  {
    row: "mean_CCU_F_temp_1:CCU_F_interior_temp",
    label: "Interior Temperature",
    unit: "°C",
  },
];

const Table = ({ data }) => {
  return (
    <div>
      {/*TABLE 1*/}
      <div className="section">
        <h2 className="black heading2center">Car Data</h2>
      </div>
      <table>
        <thead>
          <tr>
            <th>Sensor</th>
            <th>Average</th>
            <th>Min</th>
            <th>Max</th>
          </tr>
        </thead>

        <tbody>
          {sensors.map((sensor) => (
            <RealTableSensorDataExample
              key={sensor.row}
              sensor={sensor}
              data={data}
            />
          ))}
        </tbody>
      </table>
      {/*TABLE 2*/}
      <div className="section">
        <h2 className="black heading2center">Battery State of Health</h2>
      </div>
      <table>
        <thead>
          <tr>
            <th>Sensor</th>
            <th>Battery State of Health at Time of Purchase</th>
            <th>Current Battery State of Health</th>
          </tr>
        </thead>

        <tbody>
          {batterySensors.map((sensor) => (
            <BatteryHealthExample
              key={sensor.row}
              sensor={sensor}
              data={data}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
