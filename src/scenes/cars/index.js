import "./cars.css";
import Logo from "../../assets/logo/revPerformanceLogo.svg";
import AutomobileInfo from "../../components/atoms/automobile-info/automobile-info";
import { PrimaryButton } from "../../components/atoms/buttons";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { getToken } from "../../utils/token";

const CarsScreen = () => {
  const navigate = useNavigate();
  const token = getToken();
  const user = jwt_decode(token);
  const [cars, setCars] = useState([]);

  const carsList = cars.map((car) => (
    <AutomobileInfo
      onClick={() => {
        navigate({
          pathname: `../carsDetails/${car.vin}/${car.model}/${car.year}/${car.color}`,
        });
      }}
      key={car.car_id}
      model={car.model}
      vin={car.vin}
    />
  ));

  let apiUrl;
  if (user.user_role === 2 || user.user_role === 3) {
    apiUrl = "https://rimacperformance-dev.ryacom.org/api/car/all";
  } else {
    apiUrl = "https://rimacperformance-dev.ryacom.org/api/car";
  }

  useEffect(() => {
    const reqUrl = apiUrl + "?" + user.user_id;
    const controller = new AbortController();

    fetch(reqUrl, {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
      signal: controller.signal,
    })
      .then((response) => {
        if (response.status == 200) {
          return response.json();
        } else {
          return [];
        }
      })
      .then((carList) => {
        console.log(carList);
        setCars(carList);
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
  }, []);

  return (
    <div className="screen__cars">
      <div className="header__cars">
        <img src={Logo} alt="logo" />
        <p className="title__cars">Your Cars</p>
      </div>
      <div className="list__cars">{carsList}</div>
      <PrimaryButton
        text={"New Car"}
        onClick={() => navigate({ pathname: "../carsRegister/" })}
      />
    </div>
  );
};

export default CarsScreen;
