import "./cars.css";
import Logo from "../../assets/logo/revPerformanceLogo.svg";
import {PrimaryButton} from "../../components/atoms/buttons"
import TextField from "../../components/atoms/text-fields/text-field"
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BackArrow } from "../../components/atoms/arrows";

const CarsRegisterScreen = () => {
    let params = useParams();

    const navigate = useNavigate();

    const [vin, setVin] = useState(null);

    const [name, setName] = useState(null);

    const handleVin = (e) => {
        let { value } = e.currentTarget;
        setVin({value})
    }

    const handleName = (e) => {
        let { value } = e.currentTarget;
        setName({value})
    }

    const register = () => {
        console.log("adding car " + name + " with vin: " + vin);
        navigate({pathname: "../carsConfirm/"+name+"&"+vin+"&"+params.token})
    }

    return (
      <div className="screen__cars">
        <BackArrow />
        <div className="header__cars">
          <img src={Logo} alt="logo"/>
          <p className="title__cars">Register</p>
        </div>
        <div className="register__cars">
          <label>VIN #</label>
          <TextField width="100%" onChange={handleVin} placeholder="VIN" />
          <label>Name</label>
          <TextField width="100%" onChange={handleName} placeholder="NAME" />
        </div>
        <PrimaryButton text="Register" onClick={register} />
      </div>
    )
}

export default CarsRegisterScreen