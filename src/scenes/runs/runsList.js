import "./runs.css";
import Logo from "../../assets/logo/revPerformanceLogo.svg";
import {BackArrow, FilterArrow} from "../../components/atoms/arrows/"
import {PrimaryButton, RunButton} from "../../components/atoms/buttons"
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const RunsListScreen = () => {
  let params = useParams();

  //const [cars, setCars] = useState({});
  const [runs, setRuns] = useState([
    {
      "run_id": "f6e94195-d71d-4301-b21f-6bbc613653fd",
      "name": "Run 1"
    },
    {
      "run_id": "f6e94195-4301-d71d-b21f-6bbc613653fd",
      "name": "Run 2"
    }
  ]);

  const navigate = useNavigate();

  const runsList = runs.map((run) => <RunButton onClick={() => console.log("analyzing " + run.name)/*navigate({pathname: '/analysis'})*/} key={run.run_id} text={run.name} />)

  const apiUrl = "https://rimacperformance-dev.ryacom.org/api/car";
  
  useEffect(() => {
    const reqUrl = apiUrl + "?" + params.car.car_id;
    /* fetch(reqUrl, 
      {method: 'GET', headers: {'Authorization': 'Bearer ' + params.token}})
      .then((response) => response.json())
      .then((runList) => {
        console.log(runList);
        //setCars(runList);
      }) */
  }, [])

    return ( 
    <div className="screen__runs">
        <BackArrow />
        <div className="header__runs">
          <img src={Logo} alt="logo" className="logo"/>
          <p className="title__runs">Car Name</p>
          <div className="img__model">
            <img src = "https://ichef.bbci.co.uk/news/976/cpsprodpb/156FE/production/_116860878_c_two1.jpg" alt = "car" />
          </div>
        </div> 
        <div className="label__runs">
          <p>RUNS</p>
          <FilterArrow className="filter__runs" text={"Newest"} />
        </div>
        <div className="list__runs">
          {runsList}
        </div>
        <PrimaryButton text={"NEW RUN"} onClick={() => console.log("click!")} />
    </div>
     );
  };
  
export default RunsListScreen;
  
  