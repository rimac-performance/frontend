import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { BackArrow } from "../../components/atoms/arrows";
import Timer from "../../components/atoms/timer";
import RevLogo from "../../assets/logo/revPerformanceLogo.svg";
import "./analysis.css";
import React, { useEffect, useState } from "react";
import CoolantInOut from "../../components/charts/coolantInOut";
import LeftHPITempIGBT1 from "../../components/charts/leftHpiTempIgbt1";
import LeftHPITempIGBT2 from "../../components/charts/leftHpiTempIgbt2";
import LeftHPITempIGBT3 from "../../components/charts/leftHpiTempIgbt3";
import RightHPITempIGBT1 from "../../components/charts/rightHpiTempIgbt1";
import RightHPITempIGBT2 from "../../components/charts/rightHpiTempIgbt2";
import RightHPITempIGBT3 from "../../components/charts/rightHpiTempIgbt3";
import RightTempMotor1 from "../../components/charts/rightTempMotor1";
import RightTempMotor2 from "../../components/charts/rightTempMotor2";
import LeftTempMotor2 from "../../components/charts/leftTempMotor2";
import LeftTempMotor1 from "../../components/charts/leftTempMotor1";
import PCUAcceleratorPedal from "../../components/charts/pcuAcceleratorPedal";
import VehicleSpeed from "../../components/charts/vehicleSpeed";
import VCUVehicleST from "../../components/charts/vcuVehicleSt";
import AmbientTemp from "../../components/charts/ambientTemperature";
import InteriorTemp from "../../components/charts/interiorTemp";
import PDUHVBatterySOH from "../../components/charts/pduHvBatterySoh";
import PDUHVBatterySOC from "../../components/charts/pduHvBatterySoc";
import PDUHVBatteryVoltageCurrent from "../../components/charts/pduHvBatteryVoltageCurrent";
import PDUHVBatteryVoltage from "../../components/charts/pduHvBatteryVoltage";
import Odometer from "../../components/charts/odometer";
import { useAnalysisData } from "../../services/apiService";

const AnalysisScreen = () => {
  const [range, setRange] = useState([0, 20]);
  const [data, loading] = useAnalysisData();

  const handleTimerChange = (newValue) => {
    setRange(newValue);
  };

  return (
    <div className={"container"}>
      <BackArrow />
      <div style={{ height: 24 }} />
      <div className="imageContainer">
        <img className="logo" src={RevLogo} alt="Rev Performance" />
      </div>
      <div className="header">
        <h1>ANALYSIS</h1>
      </div>
      {!loading && (
        <div>
          <div className="timer">
            <Timer
              min={parseInt(data[0].time.slice(11, 13))}
              max={parseInt(data[data.length - 1].time.slice(11, 13)) + 1}
              onChange={handleTimerChange}
            />
          </div>
          {/*GRAPHS OF SENSOR DATA*/}
          {/*        <AmbientTemp />
        <InteriorTemp />
        <CoolantInOut />
        <LeftHPITempIGBT1 />
        <LeftHPITempIGBT2 />
        <LeftHPITempIGBT3 />
        <RightHPITempIGBT1 />
        <RightHPITempIGBT2 />
        <RightHPITempIGBT3 />
        <RightTempMotor1 />
        <RightTempMotor2 />
        <LeftTempMotor2 />
        <LeftTempMotor1 />
        <PDUHVBatterySOC />
        <PDUHVBatterySOH />
        <PDUHVBatteryVoltageCurrent />
        <PDUHVBatteryVoltage />
        <PCUAcceleratorPedal />
        <Odometer />*/}
          <VehicleSpeed range={range} data={data} />
          <VCUVehicleST />
          <div style={{ marginBottom: 200 }} />
        </div>
      )}
    </div>
  );
};

export default AnalysisScreen;
