import "./runs.css";
import Logo from "../../assets/logo/revPerformanceLogo.svg";
import AutomobileInfo from "../../components/atoms/automobile-info/automobile-info";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { PrimaryButton } from "../../components/atoms/buttons";

const RunsScreen = () => {
  let params = useParams();
  const token = params.token;
  const user = jwt_decode(token);
  const [cars, setCars] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isEngineer, setIsEngineer] = useState(false);

  const navigate = useNavigate();

  const carsList = cars.map((car) => (
    <AutomobileInfo
      onClick={() => {
        console.log("selecting car:" + car.car_id);
        /*makeSelection({car})*/ navigate({
          pathname: "../runsList/" + car.car_id + "/" + token,
        });
      }}
      key={car.car_id}
      model={car.model}
      vin={car.vin}
    />
  ));

  const apiUrl = "https://rimacperformance-dev.ryacom.org/api/car";

  useEffect(() => {
    const reqUrl = apiUrl + "?" + user.user_id;
    const controller = new AbortController();

    if (user.user_role === 3) {
      setIsAdmin(true);
    } else if (user.user_role === 2) {
      setIsEngineer(true);
    }

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
      {isAdmin ? (
        <div className="hidden__edit">
          <PrimaryButton
            text={"Edit Sensors"}
            onClick={() => navigate({ pathname: `../adminAnalysis/${token}` })}
          />
        </div>
      ) : (
        <div />
      )}
      {isEngineer ? (
        <div className="hidden__edit">
          <PrimaryButton
            text={"Edit Thresholds"}
            onClick={() =>
              navigate({ pathname: `../engineerAnalysis/${token}` })
            }
          />
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};

export default RunsScreen;
