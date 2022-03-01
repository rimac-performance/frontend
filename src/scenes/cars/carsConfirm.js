import "./cars.css";
import Logo from "../../assets/logo/revPerformanceLogo.svg";
import {PrimaryButton} from "../../components/atoms/buttons"
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BackArrow } from "../../components/atoms/arrows";

const CarsConfirmScreen = () => {
    let params = useParams();
    const navigate = useNavigate();

    const [car, setCar] = useState({});

    useEffect(() => {
        let car = {
            "car_id": "f6e94195-4301-b21f-d71d-6bbc613653fd",
            "vin": "1459359jd3",
            "model": "model",
            "year": 2021,
            "color": "red"
        }
        setCar(car)
    }, [])

    const addCar = () => {
        /* add car with api */
        navigate({pathname: "../cars"});
    }

    return (
        <div className="screen__cars">
        <BackArrow />
        <div className="header__cars">
          <img src={Logo} alt="logo"/>
          <p className="title__cars">Register</p>
          <div className="img__model">
            <img src = "https://ichef.bbci.co.uk/news/976/cpsprodpb/156FE/production/_116860878_c_two1.jpg" alt = "car" />
          </div>
        </div>
        <div className="confirm__cars">
          <p><span className="span__bold">VIN # :</span> {car.vin}</p>
          <p><span className="span__bold">TYPE :</span> {car.model}</p>
          <p><span className="span__bold">YEAR :</span> {car.year}</p>
          <p><span className="span__bold">FROM :</span> Croatia{}</p>
        </div>
        <PrimaryButton text="Confirm" onClick={addCar} />
      </div>
    )
}

export default CarsConfirmScreen;