import "./runs.css";
import Logo from "../../assets/logo/revPerformanceLogo.svg";
import AutomobileInfo from "../../components/atoms/automobile-info/automobile-info"
import { Link } from "react-router-dom";

const RunsScreen = () => {

  return (
    <div className="screen">
      <div className="header__runs">
        <img src={Logo} alt="logo" className="logo"/>
        <p className="title__runs">Select a Car</p>
      </div>
      <div className="list__runs__cars">
        <Link to={{pathname: '/runsList'}} className="selection__runs">
          <AutomobileInfo model='model' vin='000123456789' />
        </Link>
        <Link to={{pathname: '/runsList'}} className="selection__runs">
          <AutomobileInfo model='model' vin='987654321000' />
        </Link>
      </div>
    </div>
  );
};

export default RunsScreen;