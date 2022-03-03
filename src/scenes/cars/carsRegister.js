import "./cars.css";
import Logo from "../../assets/logo/revPerformanceLogo.svg";
import { PrimaryButton } from "../../components/atoms/buttons";
import TextField from "../../components/atoms/text-fields/text-field";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BackArrow } from "../../components/atoms/arrows";

const CarsRegisterScreen = () => {
  let params = useParams();
  const token = params.token;
  const navigate = useNavigate();

  const [vin, setVin] = useState("");

  const [model, setModel] = useState("");

  const [year, setYear] = useState("");

  const [color, setColor] = useState("");

  const handleVin = (e) => {
    let { value } = e.currentTarget;
    setVin({ value });
  };

  const handleModel = (e) => {
    let { value } = e.currentTarget;
    setModel({ value });
  };

  const handleYear = (e) => {
    let { value } = e.currentTarget;
    setYear({ value });
  };

  const handleColor = (e) => {
    let { value } = e.currentTarget;
    setColor({ value });
  };

  const register = () => {
    console.log("adding car " + model.value + " with vin: " + vin.value);

    navigate({
      pathname:
        "../carsConfirm/" +
        model.value +
        "/" +
        vin.value +
        "/" +
        year.value +
        "/" +
        color.value +
        "/" +
        token,
    });
  };

  return (
    <div className="screen__cars">
      <BackArrow />
      <div className="header__cars">
        <img src={Logo} alt="logo" />
        <p className="title__cars">Register</p>
      </div>
      <div className="register__cars">
        <label>VIN #</label>
        <TextField width="100%" onChange={handleVin} placeholder="VIN" />
        <label>Model</label>
        <TextField width="100%" onChange={handleModel} placeholder="MODEL" />
        <label>Year</label>
        <TextField width="100%" onChange={handleYear} placeholder="YEAR" />
        <label>Color</label>
        <TextField width="100%" onChange={handleColor} placeholder="COLOR" />
      </div>
      <PrimaryButton text="Register" onClick={register} />
    </div>
  );
};

export default CarsRegisterScreen;
