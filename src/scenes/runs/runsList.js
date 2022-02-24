import "./runs.css";
import Logo from "../../assets/logo/revPerformanceLogo.svg";
import {BackArrow, FilterArrow} from "../../components/atoms/arrows/"
import {PrimaryButton, RunButton} from "../../components/atoms/buttons"

const RunsListScreen = () => {
    return ( 
    <div className="screen">
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
          <RunButton text={"Run 1"} onClick={() => console.log("click!")} />
          <RunButton text={"Run 2"} onClick={() => console.log("click!")} />
        </div>
        <PrimaryButton text={"NEW RUN"} onClick={() => console.log("click!")} />
    </div>
     );
  };
  
export default RunsListScreen;
  
  