import "./cars.css";
import Logo from "../../assets/logo/revPerformanceLogo.svg";
import AutomobileInfo from "../../components/atoms/automobile-info/automobile-info"
import {PrimaryButton} from "../../components/atoms/buttons"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CarsScreen = ({user_id, token}) => {
  //const [cars, setCars] = useState({});
  const [cars, setCars] = useState([
    {
      "car_id": "f6e94195-d71d-4301-b21f-6bbc613653fd",
      "vin": "1459359jd3",
      "model": "model",
      "year": 2019,
      "color": "blue"
    },
    {
      "car_id": "f6e94195-4301-d71d-b21f-6bbc613653fd",
      "vin": "1459359jd3",
      "model": "model",
      "year": 2019,
      "color": "blue"
    }
  ]);

  const navigate = useNavigate();

  const carsList = cars.map((car) => <AutomobileInfo key={car.car_id} model={car.model} vin={car.vin} />)

  const apiUrl = "https://rimacperformance-dev.ryacom.org/api/car";

  useEffect(() => {
    const reqUrl = apiUrl + "?" + user_id;
    /* fetch(reqUrl, 
      {method: 'GET', headers: {'Authorization': 'Bearer ' + token}})
      .then((response) => response.json())
      .then((carList) => {
        console.log(carList);
        //setCars(carList);
      }) */
  }, [carsList])
   
  return (
    <div className="screen__cars">
      <div className="header__cars">
        <img src={Logo} alt="logo" className="logo"/>
        <p className="title__cars">Your Cars</p>
      </div>
      <div className="list__cars">
        {carsList}
      </div>
      <PrimaryButton text={"New Car"} onClick={() => navigate({pathname: "/carsRegister/"+user_id+"&"+token})} />
    </div>
  );
};

export default CarsScreen;
