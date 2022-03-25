import { CheckBox } from "../../components/atoms/checkboxes";
import Logo from "../../assets/logo/revPerformanceLogo.svg";
import { SecondaryButton } from "../../components/atoms/buttons";
import "./style.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { backToFront, frontToBack } from "../../utils/sensors";
import { BackArrow } from "../../components/atoms/arrows";

const AdminAnalysisScreen = () => {
  const params = useParams();
  const token = params.token;

  const apiUrl = "https://rimacperformance-dev.ryacom.org/api/sensor/status";

  const keys = {
    speed: 0,
    acceleration: 1,
    mileage: 2,
    direction: 3,
    battery: 4,
    current: 5,
    voltage: 6,
    consumption: 7,
    energy: 8,
    power: 9,
    coolant: 10,
    interior: 11,
    exterior: 12,
    Lrear: 13,
    Rrear: 14,
    Lmotor: 15,
    Rmotor: 16,
    unit: 17,
    power_available: 18,
  };

  const [state, setState] = useState([
    { name: "speed", isEnabled: false },
    { name: "acceleration", isEnabled: false },
    { name: "mileage", isEnabled: false },
    { name: "direction", isEnabled: false },
    { name: "battery", isEnabled: false },
    { name: "current", isEnabled: false },
    { name: "voltage", isEnabled: false },
    { name: "consumption", isEnabled: false },
    { name: "energy", isEnabled: false },
    { name: "power", isEnabled: false },
    { name: "coolant", isEnabled: false },
    { name: "interior", isEnabled: false },
    { name: "exterior", isEnabled: false },
    { name: "Lrear", isEnabled: false },
    { name: "Rrear", isEnabled: false },
    { name: "Lmotor", isEnabled: false },
    { name: "Rmotor", isEnabled: false },
    { name: "unit", isEnabled: false },
    { name: "power_available", isEnabled: false },
  ]);

  useEffect(() => {
    fetch(apiUrl, { headers: { Authorization: "Bearer " + token } })
      .then((response) => {
        return response.json();
      })
      .then((currentState) => {
        console.log(currentState);
        currentState.forEach((sensor) => {
          let temp = [...state];
          if (backToFront[sensor.name]) {
            let enable;
            sensor.status == 2 ? (enable = true) : (enable = false);
            let frontName = backToFront[sensor.name];
            if (keys[frontName] || frontName == "speed") {
              temp[keys[frontName]].isEnabled = enable;
              console.log("setting state for " + frontName + " to " + enable);
              setState(temp);
            }
          }
        });
        console.log(state);
      });
  }, []);

  const checkBoxOnchange = (e) => {
    let temp = [...state];
    temp[keys[e.currentTarget.name]].isEnabled =
      !temp[keys[e.currentTarget.name]].isEnabled;
    console.log(temp);
    setState(temp);
  };

  const submit = () => {
    let msgBody = { sensors: [] };
    console.log(state);
    state.forEach((sensor) => {
      let status;
      sensor.isEnabled ? (status = 2) : (status = 1);
      let dbNames = frontToBack[sensor.name].names;
      dbNames.forEach((dbName) => {
        msgBody.sensors.push({
          name: dbName,
          status: status,
        });
        console.log();
      });
    });

    console.log(msgBody);

    fetch(apiUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(msgBody),
    })
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
  return (
    <>
      <div className="screen__community ">
        <BackArrow to={`../runs/${token}`} />
        <div className="header__community">
          <img src={Logo} alt="logo" />
          <p className="title__community">Edit Sensors</p>
        </div>
        <p className="caption">
          To determine which set of sensors car owners can view and complete
          analysis with, use the check boxes below. A checked box indicates a
          car owner can view that sensor
        </p>
        <CheckBox
          name={"speed"}
          text={"Speed"}
          onChange={checkBoxOnchange}
          checked={state[0].isEnabled}
        ></CheckBox>
        <CheckBox
          name={"acceleration"}
          text={"Acceleration"}
          onChange={checkBoxOnchange}
          checked={state[1].isEnabled}
        ></CheckBox>
        <CheckBox
          name={"mileage"}
          text={"Mileage"}
          onChange={checkBoxOnchange}
          checked={state[2].isEnabled}
        ></CheckBox>
        <CheckBox
          name={"direction"}
          text={"Direction"}
          onChange={checkBoxOnchange}
          checked={state[3].isEnabled}
        ></CheckBox>
        <CheckBox
          name={"battery"}
          text={"Battery State"}
          onChange={checkBoxOnchange}
          checked={state[4].isEnabled}
        ></CheckBox>
        <CheckBox
          name={"current"}
          text={"Battery Current"}
          onChange={checkBoxOnchange}
          checked={state[5].isEnabled}
        ></CheckBox>
        <CheckBox
          name={"voltage"}
          text={"Battery Voltage"}
          onChange={checkBoxOnchange}
          checked={state[6].isEnabled}
        ></CheckBox>
        <CheckBox
          name={"consumption"}
          text={"Battery Consumption"}
          onChange={checkBoxOnchange}
          checked={state[7].isEnabled}
        ></CheckBox>
        <CheckBox
          name={"energy"}
          text={"Battery Energy Available"}
          onChange={checkBoxOnchange}
          checked={state[8].isEnabled}
        ></CheckBox>
        <CheckBox
          name={"power"}
          text={"Vehicle Output Power "}
          onChange={checkBoxOnchange}
          checked={state[9].isEnabled}
        ></CheckBox>
        <CheckBox
          name={"coolant"}
          text={"Coolant Temperature"}
          onChange={checkBoxOnchange}
          checked={state[10].isEnabled}
        ></CheckBox>
        <CheckBox
          name={"interior"}
          text={"Interior Temperature"}
          onChange={checkBoxOnchange}
          checked={state[11].isEnabled}
        ></CheckBox>
        <CheckBox
          name={"exterior"}
          text={"Exterior Temperature"}
          onChange={checkBoxOnchange}
          checked={state[12].isEnabled}
        ></CheckBox>
        <CheckBox
          name={"Lrear"}
          text={"Rear Left Motor"}
          onChange={checkBoxOnchange}
          checked={state[13].isEnabled}
        ></CheckBox>
        <CheckBox
          name={"Rrear"}
          text={"Rear Right Motor"}
          onChange={checkBoxOnchange}
          checked={state[14].isEnabled}
        ></CheckBox>
        <CheckBox
          name={"Lmoter"}
          text={"Left Motor Temperature"}
          onChange={checkBoxOnchange}
          checked={state[15].isEnabled}
        ></CheckBox>
        <CheckBox
          name={"Rmotor"}
          text={"Right Motor Temperature "}
          onChange={checkBoxOnchange}
          checked={state[16].isEnabled}
        ></CheckBox>
        <CheckBox
          name={"unit"}
          text={"Power Control Unit"}
          onChange={checkBoxOnchange}
          checked={state[17].isEnabled}
        ></CheckBox>
        <CheckBox
          name={"power_available"}
          text={"Power Control Unit Power Available"}
          onChange={checkBoxOnchange}
          checked={state[18].isEnabled}
        ></CheckBox>
        <SecondaryButton text={"Submit"} onClick={submit}></SecondaryButton>
      </div>
    </>
  );
};

export default AdminAnalysisScreen;
