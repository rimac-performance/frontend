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
  const [isFiltering, setIsFiltering] = useState(false);

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

  const filterAlphabetical = () => {
    let temp = [...runs];
    temp.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setRuns(temp);
    setIsFiltering(!isFiltering);
  };

  const filterNewest = () => {
    let temp = [...runs];
    temp.sort((a, b) => {
      return new Date(b.run_date) - new Date(a.run_date);
    });
    setRuns(temp);
    setIsFiltering(!isFiltering);
  };

  const filterOldest = () => {
    let temp = [...runs];
    temp.sort((a, b) => {
      return new Date(a.run_date) - new Date(b.run_date);
    });
    setRuns(temp);
    setIsFiltering(!isFiltering);
  };

  const filtersList = (
    <div className="filter__runs__list">
      <p className="filter__runs__filter" onClick={filterAlphabetical}>
        Alphabetical
      </p>
      <p className="filter__runs__filter" onClick={filterNewest}>
        Newest
      </p>
      <p className="filter__runs__filter" onClick={filterOldest}>
        Oldest
      </p>
    </div>
  );

  return (
    <div className="screen__runs__list">
      <BackArrow to={"../runs/"} />
      <div className="header__runs">
        <img src={Logo} alt="logo" />
        <p className="title__runs">{params.model}</p>
        <div className="img__model">
          <img src={Automobile} alt="car" />
        </div>
      </div>
      <div className="label__runs">
        <p>RUNS</p>
        <FilterArrow
          className="filter__runs"
          onClick={() => setIsFiltering(!isFiltering)}
        />
      </div>
      {isFiltering ? filtersList : <></>}
      <div className="list__runs">{runsList}</div>
      <PrimaryButton
        text={"NEW RUN"}
        onClick={() =>
          navigate({
            pathname: `../runsUpload/${params.model}/${params.car_id}`,
          })
        }
      />
    </div>
  );
};

export default RunsListScreen;
