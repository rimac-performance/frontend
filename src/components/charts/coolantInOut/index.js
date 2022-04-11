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
import moment from "moment";

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

const CoolantInOut = ({ data, range, label, display, threshold }) => {
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

  // console.log(filteredData);

  let thresh = [threshold];

  // threshold: thresholdData["mean_CCU_R_temp_1:CCU_R_batt_coolant_in_temp"]

  filteredData.forEach((i, index) => {
    thresh[index] = threshold;
  });

  console.log({ thresh });

  const graphData = {
    labels: filteredData.map((item) => moment(item.time).format("mm:ss.SS")),
    datasets: [
      {
        showLine: true,
        label: "Advised Threshold",
        data: thresh,
        backgroundColor: "rgb(69,98,175)",
      },
      {
        label: "Coolant In °C",
        data: data.map(
          (item) => item["mean_CCU_R_temp_1:CCU_R_batt_coolant_in_temp"]
        ),
        borderColor: "#E9591CFF",
        backgroundColor: "rgba(233,89,28,0.5)",
      },
      {
        label: "Coolant Out °C",
        data: data.map(
          (item) => item["mean_CCU_R_temp_1:CCU_R_batt_coolant_out_temp"]
        ),
        borderColor: "#71e0a5",
        backgroundColor: "rgba(113,224,165,0.5)",
      },
    ],
  };

  console.log(range);

  return (
    <div className="section">
      <h2 className="black heading2center">
        Coolant In Temp Vs. Coolant Out Temp
      </h2>
      <div className="chart">
        <Line options={options} data={graphData} />
        <div className="body">mm:ss.ms</div>
      </div>
    </div>
  );
};

export default CoolantInOut;
