import "./style.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import React from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

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

const data = {
  labels: ["0.00 s", "5.00 s", "10.00 s", "15.00 s", "20.00 s"],
  datasets: [
    {
      label: "Coolant In",
      data: [170, 182, 193, 181, 198],
      borderColor: "#E9591CFF",
      backgroundColor: "rgba(233,89,28,0.5)",
    },
    {
      label: "Coolant Out",
      data: [194, 192, 193, 181, 192],
      borderColor: "#71e0a5",
      backgroundColor: "rgba(113,224,165,0.5)",
    },
  ],
};

const CoolantInOut = () => {
  return (
    <div className="section">
      <h2 className="black heading2center">
        Coolant In Temp Vs. Coolant Out Temp
      </h2>
      <div className="chart">
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default CoolantInOut;
