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
import React, { useEffect, useState } from "react";
import { exampleRequest } from "../../../services/apiService";

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

const PDUHVBatteryVoltage = ({ data, range }) => {
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

  console.log(filteredData);

  const graphData = {
    labels: filteredData.map((item) => item.time.slice(11, 16)),
    datasets: [
      {
        label: "km/h",
        data: data.map(
          (item) =>
            item["mean_PDU_HV_battery_performance:PDU_HV_battery_voltage"]
        ),
        borderColor: "#E9591CFF",
        backgroundColor: "rgba(233,89,28,0.5)",
      },
    ],
  };

  console.log(range);

  return (
    <div className="section">
      <h2 className="black heading2center">PDU HV Battery Voltage</h2>
      <div className="chart">
        <Line options={options} data={graphData} />
      </div>
    </div>
  );
};

export default PDUHVBatteryVoltage;
