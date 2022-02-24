import "./cars.css";
import Logo from "../../assets/logo/revPerformanceLogo.svg";
import AutomobileInfo from "../../components/atoms/automobile-info/automobile-info"
import {PrimaryButton} from "../../components/atoms/buttons"

const CarsScreen = () => {
  return (
    <div className="screen">
      <div className="header__cars">
        <img src={Logo} alt="logo" className="logo"/>
        <p className="title__cars">Your Cars</p>
      </div>
      <div className="list__cars">
        <AutomobileInfo model='model' vin='000123456789' />
        <AutomobileInfo model='model' vin='987654321000' />
      </div>
      <PrimaryButton text={"New Car"} onClick={() => console.log("adding car!")} />
    </div>
  );
};

export default CarsScreen;
