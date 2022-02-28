import "./cars.css";
import Logo from "../../assets/logo/revPerformanceLogo.svg";
import AutomobileInfo from "../../components/atoms/automobile-info/automobile-info";
import { PrimaryButton } from "../../components/atoms/buttons";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import jwt_decode from "jwt-decode";

const CarsScreen = () => {
  const navigate = useNavigate();
  const params = useParams();
  const token = params.token;
  const user = jwt_decode(token);
  const [cars, setCars] = useState([]);
  /*const [cars, setCars] = useState([
    {
      car_id: "f6e94195-d71d-4301-b21f-6bbc613653fd",
      vin: "1459359jd3",
      model: "model",
      year: 2019,
      color: "blue",
    },
    {
      car_id: "f6e94195-4301-d71d-b21f-6bbc613653fd",
      vin: "1459359jd3",
      model: "model",
      year: 2019,
      color: "blue",
    },
  ]);*/

  const carsList = cars.map((car) => (
    <AutomobileInfo key={car.car_id} model={car.model} vin={car.vin} />
  ));

  const apiUrl = "https://rimacperformance-dev.ryacom.org/api/car";

  useEffect(() => {
    const reqUrl = apiUrl + "?" + user.user_id;
    const controller = new AbortController();

    fetch(reqUrl, {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
      signal: controller.signal,
    })
      .then((response) => {
        return response.json();
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
        onClick={() =>
          navigate({ pathname: "../carsRegister/" + +"&" + token })
        }
      />
    </div>
  );
};

export default CarsScreen;
