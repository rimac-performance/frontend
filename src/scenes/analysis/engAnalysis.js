import TextField from "../../components/atoms/text-fields/text-field";
import Logo from "../../assets/logo/revPerformanceLogo.svg";
import { SecondaryButton } from "../../components/atoms/buttons";
import "./style.css";
import { useState } from "react";

const EngAnalysis = () => {
  const [state, setState] = useState({
    time: false,
    speed: false,
    acceleration: false,
    milage: false,
    direction: false,
    battery: false,
    voltage: false,
    consumption: false,
    energy: false,
    power: false,
    coolant: false,
    interior: false,
    exterior: false,
    Lrear: false,
    Rrear: false,
    Lmoter: false,
    Rmotor: false,
    unit: false,
    power_available: false,
  });
  const checkBoxOnchange = (e) => {
    var temp = { ...state };
    temp[e.currentTarget.name] = !temp[e.currentTarget.name];
    setState(temp);
  };
  const submit = () => {
    console.log(state);
  };
  return (
    <>
      <div className="screen__community ">
        <div className="header__community">
          <img src={Logo} alt="logo" />
          <p className="title__community">Edit Sensors</p>
        </div>
        <TextField
          name={"time"}
          text={"Time"}
          onChange={checkBoxOnchange}
        ></TextField>
        <TextField
          name={"speed"}
          text={"Speed"}
          onChange={checkBoxOnchange}
        ></TextField>
        <TextField
          name={"acceleration"}
          text={"Acceleration"}
          onChange={checkBoxOnchange}
        ></TextField>
        <TextField
          name={"milage"}
          text={"Milage"}
          onChange={checkBoxOnchange}
        ></TextField>
        <TextField
          name={"direction"}
          text={"Direction"}
          onChange={checkBoxOnchange}
        ></TextField>
        <TextField
          name={"battery"}
          text={"Battery Current"}
          onChange={checkBoxOnchange}
        ></TextField>
        <TextField
          name={"voltage"}
          text={"Battery Voltage"}
          onChange={checkBoxOnchange}
        ></TextField>
        <TextField
          name={"consumption"}
          text={"Battery Consumption"}
          onChange={checkBoxOnchange}
        ></TextField>
        <TextField
          name={"energy"}
          text={"Battery Energy Available"}
          onChange={checkBoxOnchange}
        ></TextField>
        <TextField
          name={"power"}
          text={"Vehicle Output Power "}
          onChange={checkBoxOnchange}
        ></TextField>
        <TextField
          name={"coolant"}
          text={"Coolant Temperature"}
          onChange={checkBoxOnchange}
        ></TextField>
        <TextField
          name={"interior"}
          text={"Interior Temperature"}
          onChange={checkBoxOnchange}
        ></TextField>
        <TextField
          name={"exterior"}
          text={"Exterior Temperature"}
          onChange={checkBoxOnchange}
        ></TextField>
        <TextField
          name={"Lrear"}
          text={"Rear Left Motor"}
          onChange={checkBoxOnchange}
        ></TextField>
        <TextField
          name={"Rrear"}
          text={"Rear Right Motor"}
          onChange={checkBoxOnchange}
        ></TextField>
        <TextField
          name={"Lmoter"}
          text={"Left Motor Temperature"}
          onChange={checkBoxOnchange}
        ></TextField>
        <TextField
          name={"Rmotor"}
          text={"Right Motor Temperature "}
          onChange={checkBoxOnchange}
        ></TextField>
        <TextField
          name={"unit"}
          text={"Power Control Unit"}
          onChange={checkBoxOnchange}
        ></TextField>
        <TextField
          name={"power_available"}
          text={"Power Control Unit Power Available"}
          onChange={checkBoxOnchange}
        ></TextField>
        <SecondaryButton text={"Submit"} onClick={submit}></SecondaryButton>
      </div>
    </>
  );
};

export default EngAnalysis;
