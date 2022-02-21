import React, { useState } from "react";
import "./style.css";
import { Slider } from "@mui/material";

const Timer = () => {
  let timedRun = 20.01;

  const [value, setValue] = useState([0, timedRun]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const marks = [
    {
      value: 0,
      label: "0.00 s",
    },
    {
      value: timedRun,
      label: timedRun + " s",
    },
  ];

  return (
    <div className="timer-slider">
      <h2 className="black timer-heading">Time</h2>
      <Slider
        getAriaLabel={() => "Time range"}
        value={value}
        track={true}
        min={0}
        max={timedRun}
        step={0.01}
        onChange={handleChange}
        valueLabelDisplay="auto"
        marks={marks}
        sx={{
          color: "#E9591C",
        }}
      />
    </div>
  );
};

export default Timer;
