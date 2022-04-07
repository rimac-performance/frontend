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
      label: "km/h",
      data: [0, 7.5, 8, 13, 12.5],
      borderColor: "#E9591CFF",
      backgroundColor: "rgba(233,89,28,0.5)",
    },
  ],
};

const PCUAcceleratorPedal = () => {
  return (
    <div className="section">
      <h2 className="black heading2center">PCU Accelerator Pedal</h2>
      <div className="chart">
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default PCUAcceleratorPedal;
