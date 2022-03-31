import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import { BackArrow } from "../../components/atoms/arrows";
import Timer from "../../components/atoms/timer";
import RevLogo from "../../assets/logo/revPerformanceLogo.svg";
import "./analysis.css";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
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
import Mileage from "../../components/charts/mileage";
import { Chips } from "../../components/atoms/chips";
import Table from "../../components/table";
import { PrimaryButton } from "../../components/atoms/buttons";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FullScreenDialog = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <PrimaryButton text={"Filter Sensors"} onClick={handleClickOpen} />
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar style={{ background: "#E9591C", color: "#000000" }}>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Filter Sensors
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <div className="checkbox-wrapper">
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Ambient Temperature"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Interior Temperature"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Coolant In Out"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Left HPI Temperature IGBT1"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Left HPI Temperature IGBT2"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Left HPI Temperature IGBT3"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Right Temperature Motor 1"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Right Temperature Motor 2"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Left Temperature Motor 1"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Left Temperature Motor 2"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="PDU HV Battery SOC"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="PDU HV Battery SOH"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="PDU HV Battery Voltage Current"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="PDU HV Battery Voltage"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="PCU Accelerator Pedal"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Odometer"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Vehicle Speed"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="VCU Vehicle ST"
            />
          </FormGroup>
        </div>
      </Dialog>
    </div>
  );
};

const AnalysisScreen = () => {
  const params = useParams();
  const { run_id, token } = params;
  const [range, setRange] = useState([0, 20]);
  const [data, loading] = useAnalysisData(run_id, token);
  const [tab, setTab] = useState("chart");

  console.log("run_id", run_id);
  console.log("token", token);

  const handleTimerChange = (newValue) => {
    setRange(newValue);
  };

  const ShowCharts = () => {
    return (
      <div>
        <div className="timer">
          <Timer
            min={parseInt(data[0].time.slice(11, 13))}
            max={parseInt(data[data.length - 1].time.slice(11, 13)) + 1}
            onChange={handleTimerChange}
          />
        </div>
        <AmbientTemp />
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
        <PDUHVBatteryVoltageCurrent range={range} data={data} />
        <PDUHVBatteryVoltage range={range} data={data} />
        <PCUAcceleratorPedal />
        <Odometer />
        <VehicleSpeed range={range} data={data} />
        <VCUVehicleST />
      </div>
    );
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
      <div>
        <FullScreenDialog />
      </div>
      {!loading && (
        <div>
          <Chips
            text1={"Chart"}
            text2={"Tablular"}
            selected={tab}
            onClick={(text) => setTab(text)}
          />
          {tab === "chart" ? <ShowCharts /> : <Table />}
          <div style={{ marginBottom: 200 }} />
        </div>
      )}
    </div>
  );
};

export default AnalysisScreen;
