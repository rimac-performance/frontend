import "./cars.css";
import Logo from "../../assets/logo/revPerformanceLogo.svg";
import { PrimaryButton } from "../../components/atoms/buttons";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BackArrow } from "../../components/atoms/arrows";
import { getToken } from "../../utils/token";
import Automobile from "../../assets/image/automobile.png";

const CarsConfirmScreen = () => {
  let params = useParams();
  const token = getToken();
  console.log(token);
  const navigate = useNavigate();
  const apiUrl = "https://rimacperformance-dev.ryacom.org/api/car";

  const [car, setCar] = useState({
    vin: params.vin,
    model: params.model,
    year: params.year,
    color: params.color,
  });

  const addCar = () => {
    console.log("adding car " + car.model + " with vin: " + car.vin);
    const controller = new AbortController();
    console.log(car.vin);
    console.log(car.model);
    console.log(car.year);
    console.log(car.color);
    console.log(apiUrl);

    fetch(apiUrl, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        Accept: "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        vin: car.vin,
        model: car.model,
        year: car.year,
        color: car.color,
      }),
      signal: controller.signal,
    })
      .then((response) => {
        return response.json();
      })
      .then((car) => {
        console.log("car added");
        navigate(
          {
            pathname: "../cars/",
          },
          { replace: true }
        );
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("successfully aborted fetch");
        } else {
          //setError(err)
        }
      });
    return () => {
      controller.abort();
    };
  };

  return (
    <div className="screen__cars">
      <BackArrow to={"../carsRegister/"} />
      <div className="header__cars">
        <img src={Logo} alt="logo" />
        <p className="title__cars">Register</p>
        <div className="img__model">
          <img src={Automobile} alt="car" />
        </div>
      </div>
      <div className="confirm__cars">
        <p>
          <span className="span__bold">VIN # :</span> {car.vin}
        </p>
        <p>
          <span className="span__bold">TYPE :</span> {car.model}
        </p>
        <p>
          <span className="span__bold">YEAR :</span> {car.year}
        </p>
        <p>
          <span className="span__bold">COLOR :</span> {car.color}
        </p>
      </div>
      <PrimaryButton text="Confirm" onClick={addCar} />
    </div>
  );
};

export default CarsConfirmScreen;
