import SensorInfo from "../../components/atoms/sensors-info/sensor-view";
import Logo from "../../assets/logo/revPerformanceLogo.svg";
import { SecondaryButton } from "../../components/atoms/buttons";
import "./style.css";
import { useState } from "react";

const EngAnalysis = () => {
  const [state, setState] = useState({
    time: "",
    speed: "",
    acceleration: "",
    milage: "",
    direction: "",
    battery: "",
    voltage: "",
    consumption: "",
    energy: "",
    power: "",
    coolant: "",
    interior: "",
    exterior: "",
    Lrear: "",
    Rrear: "",
    Lmoter: "",
    Rmotor: "",
    unit: "",
    power_available: "",
  });
  const checkTextOnchange = (e) => {
    var temp = { ...state };
    temp[e.currentTarget.name] = !temp[e.currentTarget.name];
    setState(temp);
  };
  const submit = () => {
    console.log(state);
  };
  return (
    <>
      <div className="screen__community ">
        <div className="header__community">
          <img src={Logo} alt="logo" />
          <p className="title__community">Edit Sensors</p>
        </div>
        <p className="caption">
          "This page allows engineers to set the tolerance levels for different
          sensors. These thresholds will appear in analyses for all users."
        </p>
        <SensorInfo
          name={"time"}
          text={"Time"}
          onChange={checkTextOnchange}
          unit={"10s"}
        ></SensorInfo>
        <SensorInfo
          name={"speed"}
          text={"Speed"}
          onChange={checkTextOnchange}
          unit={"km/h"}
        ></SensorInfo>
        <SensorInfo
          name={"acceleration"}
          text={"Acceleration"}
          onChange={checkTextOnchange}
          unit={"km/h"}
        ></SensorInfo>
        <SensorInfo
          name={"milage"}
          text={"Milage"}
          onChange={checkTextOnchange}
          unit={"km"}
        ></SensorInfo>
        <SensorInfo
          name={"direction_latitude"}
          text={"Direction"}
          onChange={checkTextOnchange}
          unit={"Latitude"}
        ></SensorInfo>
        <SensorInfo
          name={"direction_longitude"}
          onChange={checkTextOnchange}
          unit={"Longitude"}
        ></SensorInfo>
        <SensorInfo
          name={"battery"}
          text={"Battery State of Health"}
          onChange={checkTextOnchange}
          unit={"Percentage"}
        ></SensorInfo>
        <SensorInfo
          name={"battery"}
          text={"Battery Current"}
          onChange={checkTextOnchange}
          unit={"amps"}
        ></SensorInfo>
        <SensorInfo
          name={"voltage"}
          text={"Battery Voltage"}
          onChange={checkTextOnchange}
          unit={"volts"}
        ></SensorInfo>
        <SensorInfo
          name={"consumption"}
          text={"Battery Consumption"}
          onChange={checkTextOnchange}
          unit={"Percentage"}
        ></SensorInfo>
        <SensorInfo
          name={"energy"}
          text={"Battery Energy Available"}
          onChange={checkTextOnchange}
          unit={"kWh"}
        ></SensorInfo>
        <SensorInfo
          name={"power"}
          text={"Vehicle Output Power "}
          onChange={checkTextOnchange}
          unit={"kW"}
        ></SensorInfo>
        <SensorInfo
          name={"coolant"}
          text={"Coolant Temperature"}
          onChange={checkTextOnchange}
          unit={"Celsius"}
        ></SensorInfo>
        <SensorInfo
          name={"interior"}
          text={"Interior Temperature"}
          onChange={checkTextOnchange}
          unit={"Celsius"}
        ></SensorInfo>
        <SensorInfo
          name={"exterior"}
          text={"Exterior Temperature"}
          onChange={checkTextOnchange}
          unit={"Celsius"}
        ></SensorInfo>
        <SensorInfo
          name={"Lrear"}
          text={"Rear Left Motor"}
          onChange={checkTextOnchange}
          unit={"Celsius"}
        ></SensorInfo>
        <SensorInfo
          name={"Rrear"}
          text={"Rear Right Motor"}
          onChange={checkTextOnchange}
          unit={"Celsius"}
        ></SensorInfo>
        <SensorInfo
          name={"Lmoter"}
          text={"Left Motor Temperature"}
          onChange={checkTextOnchange}
          unit={"Celsius"}
        ></SensorInfo>
        <SensorInfo
          name={"Rmotor"}
          text={"Right Motor Temperature "}
          onChange={checkTextOnchange}
          unit={"Celsius"}
        ></SensorInfo>
        <SensorInfo
          name={"unit"}
          text={"Power Control Unit"}
          onChange={checkTextOnchange}
          unit={"Range"}
        ></SensorInfo>
        <SensorInfo
          name={"power_available"}
          text={"Power Control Unit Power Available"}
          onChange={checkTextOnchange}
          unit={"Range"}
        ></SensorInfo>
        <SensorInfo
          name={"cell_temperature"}
          text={"Cell Temperature"}
          onChange={checkTextOnchange}
          unit={"Celsius"}
        ></SensorInfo>
        <SecondaryButton text={"Submit"} onClick={submit}></SecondaryButton>
      </div>
    </>
  );
};

export default EngAnalysis;
