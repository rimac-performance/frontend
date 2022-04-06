import "./runs.css";
import Logo from "../../assets/logo/revPerformanceLogo.svg";
import { BackArrow, FilterArrow } from "../../components/atoms/arrows/";
import { PrimaryButton, RunButton } from "../../components/atoms/buttons";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { decode } from "he";
import { getToken } from "../../utils/token";
import Automobile from "../../assets/image/automobile.png";

const RunsListScreen = () => {
  let params = useParams();
  const token = getToken();

  const [runs, setRuns] = useState([]);

  const navigate = useNavigate();

  const runsList = runs.map((run) => (
    <RunButton
      onClick={
        () =>
          console.log(
            `/analysis/${run.run_id}`
          ) /*navigate({pathname: '/analysis'})*/
      }
      key={run.run_id}
      text={decode(run.name)}
    />
  ));

  const apiUrl = "https://rimacperformance-dev.ryacom.org/api/run";

  useEffect(() => {
    console.log("car id: " + params.car_id);
    console.log("token: " + token);
    const reqUrl = apiUrl + "?car_id=" + params.car_id;
    console.log("request url: " + reqUrl);
    const controller = new AbortController();

    fetch(reqUrl, {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
      signal: controller.signal,
    })
      .then((response) => {
        return response.json();
      })
      .then((runList) => {
        console.log(runList);
        setRuns(runList);
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
    <div className="screen__runs__list">
      <BackArrow to={"../runs/"} />
      <div className="header__runs">
        <img src={Logo} alt="logo" />
        <p className="title__runs">Car Name</p>
        <div className="img__model">
          <img src={Automobile} alt="car" />
        </div>
      </div>
      <div className="label__runs">
        <p>RUNS</p>
        <FilterArrow className="filter__runs" text={"Newest"} />
      </div>
      <div className="list__runs">{runsList}</div>
      <PrimaryButton
        text={"NEW RUN"}
        onClick={() =>
          navigate({
            pathname: "../runsUpload/" + params.car_id,
          })
        }
      />
    </div>
  );
};

export default RunsListScreen;
