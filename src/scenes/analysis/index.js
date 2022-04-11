import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate, useParams } from "react-router-dom";
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
import { useAnalysisData, useThresholdData } from "../../services/apiService";
import Mileage from "../../components/charts/mileage";
import { Chips } from "../../components/atoms/chips";
import Table from "../../components/table";
import { PrimaryButton, SecondaryButton } from "../../components/atoms/buttons";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import { Line } from "react-chartjs-2";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { getToken } from "../../utils/token";
import moment from "moment";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FullScreenDialog = ({ charts, setCharts, coolant, setCoolant }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleToggle = (index, value) => {
    let newCharts = [...charts];

    newCharts[index].display = value;

    setCharts(newCharts);
  };

  const handleCoolantToggle = (value) => {
    setCoolant({
      ...coolant,
      display: value,
    });
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
            {/*<Button autoFocus color="inherit" onClick={handleChecked}>*/}
            {/*  save*/}
            {/*</Button>*/}
          </Toolbar>
        </AppBar>
        <div className="checkbox-wrapper">
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={coolant.display}
                  onChange={(e) => handleCoolantToggle(e.target.checked)}
                />
              }
              label={coolant.label}
            />
            {charts.map((chart, index) => (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={chart.display}
                    onChange={(e) => handleToggle(index, e.target.checked)}
                  />
                }
                label={chart.label}
              />
            ))}
          </FormGroup>
        </div>
      </Dialog>
    </div>
  );
};

const FullScreenDialogDownloadButton = () => {
  const apiUrl = "https://revperformance-dev.ryacom.org/api/run/download?";
  const params = useParams();
  const { run_id } = params;
  const [open, setOpen] = React.useState(false);
  const token = getToken();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <SecondaryButton text={"Download"} onClick={handleClickOpen} />
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
              Download Data
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="imageContainer">
          <img className="logo" src={RevLogo} alt="Rev Performance" />
        </div>
        <div className="header">
          <h1>DOWNLOAD</h1>
        </div>
        <div className="checkbox-wrapper">
          Click below to download the tabular data.
        </div>
        <a target="_blank" href={`${apiUrl}run_id=${run_id}`}>
          <PrimaryButton text={"Download"} />
        </a>
      </Dialog>
    </div>
  );
};

const FullScreenDialogShareButton = () => {
  const apiUrl = "https://revperformance-dev.ryacom.org/api/run/send?";
  const params = useParams();
  const { run_id } = params;
  const token = getToken();

  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEmailInput = (e) => {
    const { value } = e.currentTarget;
    setEmail({
      value,
    });
  };

  const sendRun = () => {
    let reqUrl = `${apiUrl}run_id=${run_id}&email=${email.value}`;

    fetch(reqUrl, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      <SecondaryButton text={"Share"} onClick={handleClickOpen} />
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
              Share
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="imageContainer">
          <img className="logo" src={RevLogo} alt="Rev Performance" />
        </div>
        <div className="header">
          <h1>SHARE</h1>
        </div>
        <div className="checkbox-wrapper">
          Enter the email for who you would like to share this run with.
        </div>
        <div className="checkbox-text-field">
          <TextField
            className="checkbox-text-field-input"
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
            onChange={handleEmailInput}
          />
        </div>
        <PrimaryButton text={"Share"} onClick={sendRun} />
      </Dialog>
    </div>
  );
};

const ShowCharts = ({ data, coolant, charts, range }) => {
  return (
    <div>
      {coolant.display && (
        <CoolantInOut
          data={data}
          range={range}
          label={coolant.label}
          display={coolant.display}
          threshold={coolant.threshold}
        />
      )}

      {data &&
        data.length > 0 &&
        charts.map((chart) => {
          if (!chart.display) return;

          return (
            <Chart
              key={chart.row}
              row={chart.row}
              label={chart.label}
              data={data}
              range={range}
              graphLabel={chart.graphLabel}
              threshold={chart.threshold}
            />
          );
        })}
    </div>
  );
};

const AnalysisScreenWrapper = ({ guest = false }) => {
  const params = useParams();
  const { run_id } = params;
  const token = guest ? undefined : getToken();
  const [data, thresholds, loading] = useAnalysisData(run_id, token);

  if (loading) return <div></div>;

  return (
    <AnalysisScreen
      data={data}
      thresholdData={thresholds}
      loading={loading}
      guest={guest}
    />
  );
};

const AnalysisScreen = ({ data, thresholdData, loading, guest = false }) => {
  const [range, setRange] = useState([0, 20]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("checking");
    if (data)
      setRange([
        moment(data[0].time).minutes() - 1,
        moment(data[data.length - 1].time).minutes() + 1,
      ]);
  }, [data]);

  const [tab, setTab] = useState("chart");

  const [charts, setCharts] = useState([
    {
      row: "mean_SAFETY_PCU_vehicle_ST:PCU_vehicle_speed",
      label: "Odometer - Vehicle Speed",
      graphLabel: "km/h",
      display: true,
      threshold: thresholdData["mean_SAFETY_PCU_vehicle_ST:PCU_vehicle_speed"],
    },
    {
      row: "mean_HPI_FR_phase_curr_motor_temp:HPI_temp_motor1",
      label: "Front Right Motor 1 Temp",
      graphLabel: "°C",
      display: true,
      threshold:
        thresholdData["mean_HPI_FR_phase_curr_motor_temp:HPI_temp_motor1"],
    },
    {
      row: "mean_HPI_FR_phase_curr_motor_temp:HPI_temp_motor2",
      label: "Front Right Motor 2 Temp",
      graphLabel: "°C",
      display: true,
      threshold:
        thresholdData["mean_HPI_FR_phase_curr_motor_temp:HPI_temp_motor2"],
    },
    {
      row: "mean_HPI_FL_phase_curr_motor_temp:HPI_temp_motor1",
      label: "Front Left Motor 1 Temp",
      graphLabel: "°C",
      display: true,
      threshold:
        thresholdData["mean_HPI_FL_phase_curr_motor_temp:HPI_temp_motor1"],
    },
    {
      row: "mean_PDU_HV_LV_status:PDU_HV_battery_SOC",
      label: "PDU HV Battery SOC",
      graphLabel: "%",
      display: true,
      threshold: thresholdData["mean_PDU_HV_LV_status:PDU_HV_battery_SOC"],
    },
    {
      row: "mean_PDU_HV_LV_status:PDU_HV_battery_SOH",
      label: "PDU HV Battery SOH",
      graphLabel: "%",
      display: true,
      threshold: thresholdData["mean_PDU_HV_LV_status:PDU_HV_battery_SOH"],
    },
    {
      row: "mean_PDU_HV_battery_performance:PDU_HV_battery_current",
      label: "PDU HV Battery Current",
      graphLabel: "%",
      display: true,
      threshold:
        thresholdData["mean_PDU_HV_battery_performance:PDU_HV_battery_current"],
    },
    {
      row: "mean_PDU_HV_battery_performance:PDU_HV_battery_voltage",
      label: "PDU HV Battery Voltage",
      graphLabel: "volts",
      display: true,
      threshold:
        thresholdData["mean_PDU_HV_battery_performance:PDU_HV_battery_voltage"],
    },
    {
      row: "mean_SAFETY_PCU_vehicle_ST:PCU_accelerator_pedal",
      label: "PCU Accelerator Pedal",
      graphLabel: "km/h",
      display: true,
      threshold:
        thresholdData["mean_SAFETY_PCU_vehicle_ST:PCU_accelerator_pedal"],
    },
    {
      row: "mean_HPI_FR_inverter_temp:HPI_temp_IGBT3",
      label: "Front Right HPI Temp IGBT3",
      graphLabel: "°C",
      display: true,
      threshold: thresholdData["mean_HPI_FR_inverter_temp:HPI_temp_IGBT3"],
    },
    {
      row: "mean_HPI_FL_inverter_temp:HPI_temp_IGBT3",
      label: "Front Left HPI Temp IGBT3",
      graphLabel: "°C",
      display: true,
      threshold: thresholdData["mean_HPI_FL_inverter_temp:HPI_temp_IGBT3"],
    },
    {
      row: "mean_HPI_FL_inverter_temp:HPI_temp_IGBT2",
      label: "Front Left HPI Temp IGBT2",
      graphLabel: "°C",
      display: true,
      threshold: thresholdData["mean_HPI_FL_inverter_temp:HPI_temp_IGBT2"],
    },
    {
      row: "mean_HPI_FR_inverter_temp:HPI_temp_IGBT2",
      label: "Front Right HPI Temp IGBT2",
      graphLabel: "°C",
      display: true,
      threshold: thresholdData["mean_HPI_FR_inverter_temp:HPI_temp_IGBT2"],
    },
    {
      row: "mean_HPI_FL_inverter_temp:HPI_temp_IGBT1",
      label: "Front Left HPI Temp IGBT1",
      graphLabel: "°C",
      display: true,
      threshold: thresholdData["mean_HPI_FL_inverter_temp:HPI_temp_IGBT1"],
    },
    {
      row: "mean_HPI_FR_inverter_temp:HPI_temp_IGBT1",
      label: "Front Right HPI Temp IGBT1",
      graphLabel: "°C",
      display: true,
      threshold: thresholdData["mean_HPI_FR_inverter_temp:HPI_temp_IGBT1"],
    },
    {
      row: "mean_CCU_F_temp_1:CCU_F_ambient_temp",
      label: "Ambient Temperature",
      graphLabel: "°C",
      display: true,
      threshold: thresholdData["mean_CCU_F_temp_1:CCU_F_ambient_temp"],
    },
    {
      row: "mean_CCU_F_temp_1:CCU_F_interior_temp",
      label: "Interior Temperature",
      graphLabel: "°C",
      display: true,
      threshold: thresholdData["mean_CCU_F_temp_1:CCU_F_interior_temp"],
    },
    {
      row: "mean_SAFETY_VCU_vehicle_ST:VCU_vehicle_ST",
      label: "VCU Vehicle ST",
      graphLabel: "°C",
      display: true,
      threshold: thresholdData["mean_SAFETY_VCU_vehicle_ST:VCU_vehicle_ST"],
    },
  ]);

  const [coolant, setCoolant] = useState({
    label: "Coolant In Vs. Out",
    display: true,
    threshold: thresholdData["mean_CCU_R_temp_1:CCU_R_batt_coolant_in_temp"],
  });

  const handleTimerChange = (newValue) => {
    setRange(newValue);
  };

  const filteredData =
    data &&
    data.filter(
      (item) =>
        moment(item.time).minutes() >= range[0] &&
        moment(item.time).minutes() <= range[1]
    );

  return (
    <div className={"container"}>
      {!guest && <BackArrow to={"../"} />}
      <div style={{ height: 24 }} />
      <div className="imageContainer">
        <img className="logo" src={RevLogo} alt="Rev Performance" />
      </div>
      <div className="header">
        <h1>ANALYSIS</h1>
      </div>
      {guest ? (
        <div className="guest__ad">
          <p>
            Like what you see?{" "}
            <span
              className="guest__link"
              onClick={() => {
                navigate("../create");
              }}
            >
              Click here
            </span>{" "}
            to create your own Rev account!
          </p>
        </div>
      ) : (
        <div className="share-download-wrapper">
          <div className="download">
            <FullScreenDialogDownloadButton />
          </div>
          <div className="share">
            <FullScreenDialogShareButton />
          </div>
        </div>
      )}
      <div>
        <FullScreenDialog
          charts={charts}
          setCharts={setCharts}
          coolant={coolant}
          setCoolant={setCoolant}
        />
      </div>
      {!loading && (
        <div>
          <Chips
            text1={"Chart"}
            text2={"Tabular"}
            selected={tab}
            onClick={(text) => setTab(text)}
          />
          <div className="timer">
            <Timer
              min={moment(data[0].time).minutes() - 1}
              max={moment(data[data.length - 1].time).minutes() + 1}
              onChange={handleTimerChange}
            />
          </div>
          {tab.toLowerCase() === "chart" ? (
            <ShowCharts
              data={filteredData}
              handleTimerChange={handleTimerChange}
              coolant={coolant}
              charts={charts}
              range={range}
            />
          ) : (
            <Table data={filteredData} />
          )}
          <div style={{ marginBottom: 200 }} />
        </div>
      )}
    </div>
  );
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
    },
  },
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ row, label, data, range, graphLabel, threshold }) => {
  const filteredData = data;
  // const filteredData = data.filter((item) => {
  //   console.log(
  //     new Date(item.time).getMinutes() + new Date(item.time).getSeconds() / 60
  //   );
  //
  //   const itemTime =
  //     new Date(item.time).getMinutes() + new Date(item.time).getSeconds() / 60;
  //   console.log(itemTime, range[0], range[1]);
  //
  //   return itemTime > range[0] && itemTime < range[1];
  // });

  let thresh = [threshold];

  filteredData.forEach((i, index) => {
    thresh[index] = threshold;
  });

  console.log({ thresh });

  const graphData = {
    labels: filteredData.map((item) => moment(item.time).format("mm:ss.SS")),
    datasets: [
      {
        label: "Advised Threshold",
        showLine: true,
        data: thresh,
        backgroundColor: "rgb(69,98,175)",
      },
      {
        label: graphLabel,
        data: data.map((item) => item[row]),
        borderColor: "#E9591CFF",
        backgroundColor: "rgba(233,89,28,0.5)",
      },
    ],
  };

  return (
    <div className="section">
      <h2 className="black heading2center">{label}</h2>
      <div className="graph-chart">
        <Line options={options} data={graphData} />
        <div className="body">mm:ss.ms</div>
      </div>
    </div>
  );
};

export default AnalysisScreenWrapper;
