import "./runs.css";
import Logo from "../../assets/logo/revPerformanceLogo.svg";
import { BackArrow, FilterArrow } from "../../components/atoms/arrows/";
import { PrimaryButton, RunButton } from "../../components/atoms/buttons";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { decode } from "he";

const RunsListScreen = () => {
  let params = useParams();
  const token = params.token;

  const [runs, setRuns] = useState([]);
  /*const [runs, setRuns] = useState([
    {
      run_id: "f6e94195-d71d-4301-b21f-6bbc613653fd",
      name: "Run 1",
    },
    {
      run_id: "f6e94195-4301-d71d-b21f-6bbc613653fd",
      name: "Run 2",
    },
  ]);*/

  const navigate = useNavigate();

  const runsList = runs.map((run) => (
    <RunButton
      onClick={() =>
        navigate({ pathname: `../analysis/${run.run_id}/${token}` })
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
      <BackArrow to={"../runs/" + token} />
      <div className="header__runs">
        <img src={Logo} alt="logo" />
        <p className="title__runs">Car Name</p>
        <div className="img__model">
          <img
            src="https://ichef.bbci.co.uk/news/976/cpsprodpb/156FE/production/_116860878_c_two1.jpg"
            alt="car"
          />
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
            pathname: "../runsUpload/" + params.car_id + "/" + token,
          })
        }
      />
    </div>
  );
};

export default RunsListScreen;
