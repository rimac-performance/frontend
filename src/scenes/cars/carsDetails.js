import "./cars.css";
import Logo from "../../assets/logo/revPerformanceLogo.svg";
import { BackArrow } from "../../components/atoms/arrows";
import { useParams } from "react-router-dom";

const CarsDetailsScreen = () => {
  let params = useParams();

  const car = {
    vin: params.vin,
    model: params.model,
    year: params.year,
    color: params.color,
  };

  return (
    <div className="screen__cars">
      <BackArrow to={"../"} />
      <div className="header__cars">
        <img src={Logo} alt="logo" />
        <p className="title__cars">Details</p>
        <div className="img__model">
          <img
            src="https://ichef.bbci.co.uk/news/976/cpsprodpb/156FE/production/_116860878_c_two1.jpg"
            alt="car"
          />
        </div>
      </div>
      <div className="confirm__cars">
        <p>
          <span className="span__bold">VIN # :</span> {car.vin}
        </p>
        <p>
          <span className="span__bold">TYPE :</span> {car.model}
        </p>
        <p>
          <span className="span__bold">YEAR :</span> {car.year}
        </p>
        <p>
          <span className="span__bold">COLOR :</span> {car.color}
        </p>
      </div>
    </div>
  );
};

export default CarsDetailsScreen;
