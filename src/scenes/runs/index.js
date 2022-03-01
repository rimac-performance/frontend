import "./runs.css";
import Logo from "../../assets/logo/revPerformanceLogo.svg";
import AutomobileInfo from "../../components/atoms/automobile-info/automobile-info";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import jwt_decode from "jwt-decode";

const RunsScreen = () => {
  let params = useParams();
  const token = params.token;
  const user = jwt_decode(token);
  const [cars, setCars] = useState([]);
  /*const [cars, setCars] = useState([
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
  ]);*/

  const navigate = useNavigate();

  const carsList = cars.map((car) => (
    <AutomobileInfo
      onClick={() =>
        /*makeSelection({car})*/ navigate({
          pathname: "../runsList/" + car.car_id + "/" + token,
        })
      }
      key={car.car_id}
      model={car.model}
      vin={car.vin}
    />
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

  /*if (selection) {
    let runsListScreen = <RunsListScreen car={selection} token={token} />;
    let route = <Route path="runsList" element={runsListScreen} />;
    navigate(route);
  }*/

  return (
    <div className="screen__runs">
      <div className="header__runs">
        <img src={Logo} alt="logo" />
        <p className="title__runs">Select a Car</p>
      </div>
      <div className="list__runs__cars">{carsList}</div>
    </div>
  );
};

export default RunsScreen;
