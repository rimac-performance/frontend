import { CheckBox } from "../../components/atoms/checkboxes";
import Logo from "../../assets/logo/revPerformanceLogo.svg";
import { SecondaryButton } from "../../components/atoms/buttons";
import "./style.css";
import { useState } from "react";

const AdminAnalysis = () => {
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
        <p className="caption">
          "To determine which set of sensors car owners can view and complete
          analysis with, use the check boxes below. A checked box indicates a
          car owner can view that sensor"
        </p>
        <CheckBox
          name={"time"}
          text={"Time"}
          onChange={checkBoxOnchange}
        ></CheckBox>
        <CheckBox
          name={"speed"}
          text={"Speed"}
          onChange={checkBoxOnchange}
        ></CheckBox>
        <CheckBox
          name={"acceleration"}
          text={"Acceleration"}
          onChange={checkBoxOnchange}
        ></CheckBox>
        <CheckBox
          name={"milage"}
          text={"Milage"}
          onChange={checkBoxOnchange}
        ></CheckBox>
        <CheckBox
          name={"direction"}
          text={"Direction"}
          onChange={checkBoxOnchange}
        ></CheckBox>
        <CheckBox
          name={"battery"}
          text={"Battery Current"}
          onChange={checkBoxOnchange}
        ></CheckBox>
        <CheckBox
          name={"voltage"}
          text={"Battery Voltage"}
          onChange={checkBoxOnchange}
        ></CheckBox>
        <CheckBox
          name={"consumption"}
          text={"Battery Consumption"}
          onChange={checkBoxOnchange}
        ></CheckBox>
        <CheckBox
          name={"energy"}
          text={"Battery Energy Available"}
          onChange={checkBoxOnchange}
        ></CheckBox>
        <CheckBox
          name={"power"}
          text={"Vehicle Output Power "}
          onChange={checkBoxOnchange}
        ></CheckBox>
        <CheckBox
          name={"coolant"}
          text={"Coolant Temperature"}
          onChange={checkBoxOnchange}
        ></CheckBox>
        <CheckBox
          name={"interior"}
          text={"Interior Temperature"}
          onChange={checkBoxOnchange}
        ></CheckBox>
        <CheckBox
          name={"exterior"}
          text={"Exterior Temperature"}
          onChange={checkBoxOnchange}
        ></CheckBox>
        <CheckBox
          name={"Lrear"}
          text={"Rear Left Motor"}
          onChange={checkBoxOnchange}
        ></CheckBox>
        <CheckBox
          name={"Rrear"}
          text={"Rear Right Motor"}
          onChange={checkBoxOnchange}
        ></CheckBox>
        <CheckBox
          name={"Lmoter"}
          text={"Left Motor Temperature"}
          onChange={checkBoxOnchange}
        ></CheckBox>
        <CheckBox
          name={"Rmotor"}
          text={"Right Motor Temperature "}
          onChange={checkBoxOnchange}
        ></CheckBox>
        <CheckBox
          name={"unit"}
          text={"Power Control Unit"}
          onChange={checkBoxOnchange}
        ></CheckBox>
        <CheckBox
          name={"power_available"}
          text={"Power Control Unit Power Available"}
          onChange={checkBoxOnchange}
        ></CheckBox>
        <SecondaryButton text={"Submit"} onClick={submit}></SecondaryButton>
      </div>
    </>
  );
};

export default AdminAnalysis;
