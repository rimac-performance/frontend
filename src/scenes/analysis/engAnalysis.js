import SensorInfo from "../../components/atoms/sensors-info/sensor-view";
import Logo from "../../assets/logo/revPerformanceLogo.svg";
import { SecondaryButton } from "../../components/atoms/buttons";
import { BackArrow } from "../../components/atoms/arrows";
import "./style.css";
import { useState, useEffect } from "react";
import { frontToBack, backToFront } from "../../utils/sensors";
import { getToken } from "../../utils/token";

const EngAnalysisScreen = () => {
  const token = getToken();

  const apiUrl = "https://rimacperformance-dev.ryacom.org/api/sensor/threshold";

  const keys = {
    speed: 0,
    acceleration: 1,
    mileage: 2,
    direction: 3,
    battery: 4,
    current: 5,
    voltage: 6,
    consumption: 7,
    energy: 8,
    power: 9,
    coolant: 10,
    interior: 11,
    exterior: 12,
    Lrear: 13,
    Rrear: 14,
    Lhpi: 15,
    Lmotor: 16,
    Rhpi: 17,
    Rmotor: 18,
    unit: 19,
    power_available: 20,
    cell_temperature: 21,
  };

  const [state, setState] = useState([
    { name: "speed", threshold: 0 },
    { name: "acceleration", threshold: 0 },
    { name: "mileage", threshold: 0 },
    { name: "direction", threshold: 0 },
    { name: "battery", threshold: 0 },
    { name: "current", threshold: 0 },
    { name: "voltage", threshold: 0 },
    { name: "consumption", threshold: 0 },
    { name: "energy", threshold: 0 },
    { name: "power", threshold: 0 },
    { name: "coolant", threshold: 0 },
    { name: "interior", threshold: 0 },
    { name: "exterior", threshold: 0 },
    { name: "Lrear", threshold: 0 },
    { name: "Rrear", threshold: 0 },
    { name: "Lhpi", threshold: 0 },
    { name: "Lmotor", threshold: 0 },
    { name: "Rhpi", threshold: 0 },
    { name: "Rmotor", threshold: 0 },
    { name: "unit", threshold: 0 },
    { name: "power_available", threshold: 0 },
    { name: "cell_temperature", threshold: 0 },
  ]);

  useEffect(() => {
    fetch(apiUrl, { headers: { Authorization: "Bearer " + token } })
      .then((response) => {
        return response.json();
      })
      .then((currentState) => {
        console.log(currentState);
        currentState.forEach((sensor) => {
          let temp = [...state];
          if (backToFront[sensor.name]) {
            if (sensor.threshold != null) {
              let value = sensor.threshold;
              let frontName = backToFront[sensor.name];
              if (keys[frontName] || frontName == "speed") {
                temp[keys[frontName]].threshold = value;
                console.log("setting state for " + frontName + " to " + value);
                setState(temp);
              }
            }
          }
        });
        console.log(state);
      });
  }, []);

  const checkTextOnchange = (e) => {
    let temp = [...state];
    temp[keys[e.currentTarget.name]].threshold = parseInt(
      e.currentTarget.value
    );
    console.log(temp);
    setState(temp);
  };

  const submit = () => {
    let msgBody = { sensors: [] };
    console.log(state);
    state.forEach((sensor) => {
      if (Number.isInteger(sensor.threshold)) {
        let value = sensor.threshold;
        let dbNames = frontToBack[sensor.name].names;
        dbNames.forEach((dbName) => {
          msgBody.sensors.push({
            name: dbName,
            threshold: value,
          });
          console.log();
        });
      }
    });

    console.log(msgBody);

    fetch(apiUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(msgBody),
    })
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="screen__community ">
      <BackArrow to={`../runs`} />
      <div className="header__community">
        <img src={Logo} alt="logo" />
        <p className="title__community">Edit Sensors</p>
      </div>
      <p className="caption">
        "This page allows engineers to set the tolerance levels for different
        sensors. These thresholds will appear in analyses for all users."
      </p>
      <SensorInfo
        name={"speed"}
        text={"Speed"}
        onChange={checkTextOnchange}
        unit={"km/h"}
        placeholder={state[0].threshold}
      ></SensorInfo>
      <SensorInfo
        name={"acceleration"}
        text={"Acceleration"}
        onChange={checkTextOnchange}
        unit={"km/h"}
        placeholder={state[1].threshold}
      ></SensorInfo>
      <SensorInfo
        name={"mileage"}
        text={"Mileage"}
        onChange={checkTextOnchange}
        unit={"km"}
        placeholder={state[2].threshold}
      ></SensorInfo>
      <SensorInfo
        name={"direction"}
        text={"Direction"}
        onChange={checkTextOnchange}
        unit={"degrees"}
        placeholder={state[3].threshold}
      ></SensorInfo>
      <SensorInfo
        name={"battery"}
        text={"Battery State of Health"}
        onChange={checkTextOnchange}
        unit={"Percentage"}
        placeholder={state[4].threshold}
      ></SensorInfo>
      <SensorInfo
        name={"current"}
        text={"Battery Current"}
        onChange={checkTextOnchange}
        unit={"amps"}
        placeholder={state[5].threshold}
      ></SensorInfo>
      <SensorInfo
        name={"voltage"}
        text={"Battery Voltage"}
        onChange={checkTextOnchange}
        unit={"volts"}
        placeholder={state[6].threshold}
      ></SensorInfo>
      <SensorInfo
        name={"consumption"}
        text={"Battery Consumption"}
        onChange={checkTextOnchange}
        unit={"Percentage"}
        placeholder={state[7].threshold}
      ></SensorInfo>
      <SensorInfo
        name={"energy"}
        text={"Battery Energy Available"}
        onChange={checkTextOnchange}
        unit={"kWh"}
        placeholder={state[8].threshold}
      ></SensorInfo>
      <SensorInfo
        name={"power"}
        text={"Vehicle Output Power"}
        onChange={checkTextOnchange}
        unit={"kW"}
        placeholder={state[9].threshold}
      ></SensorInfo>
      <SensorInfo
        name={"coolant"}
        text={"Coolant Temperature"}
        onChange={checkTextOnchange}
        unit={"Celsius"}
        placeholder={state[10].threshold}
      ></SensorInfo>
      <SensorInfo
        name={"interior"}
        text={"Interior Temperature"}
        onChange={checkTextOnchange}
        unit={"Celsius"}
        placeholder={state[11].threshold}
      ></SensorInfo>
      <SensorInfo
        name={"exterior"}
        text={"Exterior Temperature"}
        onChange={checkTextOnchange}
        unit={"Celsius"}
        placeholder={state[12].threshold}
      ></SensorInfo>
      <SensorInfo
        name={"Lrear"}
        text={"Rear Left Motor"}
        onChange={checkTextOnchange}
        unit={"Celsius"}
        placeholder={state[13].threshold}
      ></SensorInfo>
      <SensorInfo
        name={"Rrear"}
        text={"Rear Right Motor"}
        onChange={checkTextOnchange}
        unit={"Celsius"}
        placeholder={state[14].threshold}
      ></SensorInfo>
      <SensorInfo
        name={"Lhpi"}
        text={"Left HPI Temperature"}
        onChange={checkTextOnchange}
        unit={"Celsius"}
        placeholder={state[15].threshold}
      ></SensorInfo>
      <SensorInfo
        name={"Lmotor"}
        text={"Left Motor Temperature"}
        onChange={checkTextOnchange}
        unit={"Celsius"}
        placeholder={state[16].threshold}
      ></SensorInfo>
      <SensorInfo
        name={"Rhpi"}
        text={"Right HPI Temperature"}
        onChange={checkTextOnchange}
        unit={"Celsius"}
        placeholder={state[17].threshold}
      ></SensorInfo>
      <SensorInfo
        name={"Rmotor"}
        text={"Right Motor Temperature"}
        onChange={checkTextOnchange}
        unit={"Celsius"}
        placeholder={state[18].threshold}
      ></SensorInfo>
      <SensorInfo
        name={"unit"}
        text={"Power Control Unit"}
        onChange={checkTextOnchange}
        unit={"Range"}
        placeholder={state[19].threshold}
      ></SensorInfo>
      <SensorInfo
        name={"power_available"}
        text={"Power Control Unit Power Available"}
        onChange={checkTextOnchange}
        unit={"Range"}
        placeholder={state[20].threshold}
      ></SensorInfo>
      <SensorInfo
        name={"cell_temperature"}
        text={"Cell Temperature"}
        onChange={checkTextOnchange}
        unit={"Celsius"}
        placeholder={state[21].threshold}
      ></SensorInfo>
      <SecondaryButton text={"Submit"} onClick={submit}></SecondaryButton>
    </div>
  );
};

export default EngAnalysisScreen;
