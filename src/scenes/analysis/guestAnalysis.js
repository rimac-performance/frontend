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
import { useAnalysisData } from "../../services/apiService";
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

const charts = [
  {
    row: "mean_HPI_FR_phase_curr_motor_temp:HPI_temp_motor1",
    label: "Front Right Motor 1 Temp",
    graphLabel: "°C",
  },
  {
    row: "mean_HPI_FR_phase_curr_motor_temp:HPI_temp_motor2",
    label: "Front Right Motor 2 Temp",
    graphLabel: "°C",
  },
  {
    row: "mean_HPI_FL_phase_curr_motor_temp:HPI_temp_motor1",
    label: "Front Left Motor 1 Temp",
    graphLabel: "°C",
  },
  {
    row: "mean_PDU_HV_LV_status:PDU_HV_battery_SOC",
    label: "PDU HV Battery SOC",
    graphLabel: "%",
  },
  {
    row: "mean_PDU_HV_LV_status:PDU_HV_battery_SOH",
    label: "PDU HV Battery SOH",
    graphLabel: "%",
  },
  {
    row: "mean_PDU_HV_battery_performance:PDU_HV_battery_current",
    label: "PDU HV Battery Current",
    graphLabel: "%",
  },
  {
    row: "mean_PDU_HV_battery_performance:PDU_HV_battery_voltage",
    label: "PDU HV Battery Voltage",
    graphLabel: "volts",
  },
  {
    row: "mean_SAFETY_PCU_vehicle_ST:PCU_vehicle_speed",
    label: "Vehicle Speed",
    graphLabel: "km/h",
  },
  {
    row: "mean_SAFETY_PCU_vehicle_ST:PCU_accelerator_pedal",
    label: "PCU Accelerator Pedal",
    graphLabel: "km/h",
  },
  {
    row: "mean_HPI_FR_inverter_temp:HPI_temp_IGBT3",
    label: "Front Right HPI Temp IGBT3",
    graphLabel: "°C",
  },
  {
    row: "mean_HPI_FL_inverter_temp:HPI_temp_IGBT3",
    label: "Front Left HPI Temp IGBT3",
    graphLabel: "°C",
  },
  {
    row: "mean_HPI_FL_inverter_temp:HPI_temp_IGBT2",
    label: "Front Left HPI Temp IGBT2",
    graphLabel: "°C",
  },
  {
    row: "mean_HPI_FR_inverter_temp:HPI_temp_IGBT2",
    label: "Front Right HPI Temp IGBT2",
    graphLabel: "°C",
  },
  {
    row: "mean_HPI_FL_inverter_temp:HPI_temp_IGBT1",
    label: "Front Left HPI Temp IGBT1",
    graphLabel: "°C",
  },
  {
    row: "mean_HPI_FR_inverter_temp:HPI_temp_IGBT1",
    label: "Front Right HPI Temp IGBT1",
    graphLabel: "°C",
  },
  {
    row: "mean_CCU_F_temp_1:CCU_F_ambient_temp",
    label: "Ambient Temperature",
    graphLabel: "°C",
  },
  {
    row: "mean_CCU_F_temp_1:CCU_F_interior_temp",
    label: "Interior Temperature",
    graphLabel: "°C",
  },
];

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

const Chart = ({ row, label, data, range, graphLabel }) => {
  const filteredData = data;
  const graphData = {
    labels: filteredData.map((item) => item.time.slice(11, 16)),
    datasets: [
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
      <div className="chart">
        <Line options={options} data={graphData} />
      </div>
    </div>
  );
};

const GuestAnalysisScreen = () => {
  const navigate = useNavigate();
  const params = useParams();
  const run_id = params.run_id;
  const [range, setRange] = useState([0, 20]);
  const [data, loading] = useAnalysisData(run_id);
  const [tab, setTab] = useState("chart");

  console.log("run_id", run_id);

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

        <Odometer />
        <VCUVehicleST />
        <CoolantInOut data={data} range={range} />

        {charts.map((chart) => (
          <Chart
            key={chart.row}
            row={chart.row}
            label={chart.label}
            data={data}
            range={range}
            graphLabel={chart.graphLabel}
          />
        ))}
      </div>
    );
  };

  return (
    <div className={"container"}>
      <div style={{ height: 24 }} />
      <div className="imageContainer">
        <img className="logo" src={RevLogo} alt="Rev Performance" />
      </div>
      <div className="header">
        <h1>ANALYSIS</h1>
      </div>
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
      {!loading && (
        <div>
          <Chips
            text1={"Chart"}
            text2={"Tabular"}
            selected={tab}
            onClick={(text) => setTab(text)}
          />
          {tab.toLowerCase() === "chart" ? (
            <ShowCharts />
          ) : (
            <Table data={data} />
          )}
          <div style={{ marginBottom: 200 }} />
        </div>
      )}
    </div>
  );
};
export default GuestAnalysisScreen;
