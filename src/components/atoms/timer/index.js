import React, { useState } from "react";
import "./style.css";
import { Slider } from "@mui/material";

const Timer = ({ min, max, onChange }) => {
  const [value, setValue] = useState([min, max]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onChange(newValue);
  };

  const marks = [
    {
      value: min,
      label: `${min} m`,
    },
    {
      value: max,
      label: `${max} m`,
    },
  ];

  return (
    <div className="timer-slider">
      <h2 className="black timer-heading">Time</h2>
      <Slider
        getAriaLabel={() => "Time range"}
        value={value}
        track={"normal"}
        min={min}
        max={max}
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
