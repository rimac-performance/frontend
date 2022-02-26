import "./runs.css";
import Logo from "../../assets/logo/revPerformanceLogo.svg";
import AutomobileInfo from "../../components/atoms/automobile-info/automobile-info"
import { useState, useEffect } from "react";
import { useNavigate, Redirect } from "react-router-dom";
import RunsListScreen from "./runsList";

const RunsScreen = ({user_id, token}) => {
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
  const [selection, makeSelection] = useState(null);

  //const navigate = useNavigate();

  const carsList = cars.map((car) => <AutomobileInfo onClick={() => makeSelection({car})/*navigate({pathname: '/runsList',  })*/} key={car.car_id} model={car.model} vin={car.vin} />)

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
  }, [selection])

  if (selection) {
    return <RunsListScreen car={selection} token={token} />
  }

  return (
    <div className="screen__runs">
      <div className="header__runs">
        <img src={Logo} alt="logo" className="logo"/>
        <p className="title__runs">Select a Car</p>
      </div>
      <div className="list__runs__cars">
        {carsList}
      </div>
    </div>
  );
};

export default RunsScreen;