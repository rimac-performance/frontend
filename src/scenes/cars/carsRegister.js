import "./cars.css";
import Logo from "../../assets/logo/revPerformanceLogo.svg";
import { PrimaryButton } from "../../components/atoms/buttons";
import TextField from "../../components/atoms/text-fields/text-field";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BackArrow } from "../../components/atoms/arrows";
import { validate, validateVin } from "../../utils/validate";

const CarsRegisterScreen = () => {
  const navigate = useNavigate();

  const [vin, setVin] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [color, setColor] = useState("");

  const [vinError, setVinError] = useState(false);
  const [modelError, setModelError] = useState(false);
  const [yearError, setYearError] = useState(false);
  const [colorError, setColorError] = useState(false);

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
    let flag = true;

    if (validateVin(vin)) {
      setVinError(false);
    } else {
      setVinError(true);
      flag = false;
    }
    if (validate(model)) {
      setModelError(false);
    } else {
      setModelError(true);
      flag = false;
    }
    if (validate(year)) {
      setYearError(false);
    } else {
      setYearError(true);
      flag = false;
    }
    if (validate(color)) {
      setColorError(false);
    } else {
      setColorError(true);
      flag = false;
    }

    if (flag) {
      navigate({
        pathname:
          "../carsConfirm/" +
          vin.value +
          "/" +
          model.value +
          "/" +
          year.value +
          "/" +
          color.value,
      });
    }
  };

  return (
    <div className="screen__cars">
      <BackArrow to={"../cars/"} />
      <div className="header__cars">
        <img src={Logo} alt="logo" />
        <p className="title__cars">Register</p>
      </div>
      <div className="register__cars">
        <label>VIN #</label>
        <TextField
          width="100%"
          onChange={handleVin}
          placeholder="VIN"
          error={vinError}
        />
        <label>Model</label>
        <TextField
          width="100%"
          onChange={handleModel}
          placeholder="MODEL"
          error={modelError}
        />
        <label>Year</label>
        <TextField
          width="100%"
          onChange={handleYear}
          placeholder="YEAR"
          error={yearError}
        />
        <label>Color</label>
        <TextField
          width="100%"
          onChange={handleColor}
          placeholder="COLOR"
          error={colorError}
        />
      </div>
      <PrimaryButton text="Register" onClick={register} />
    </div>
  );
};

export default CarsRegisterScreen;
