import "./style.css";
import Automobile from "../../../assets/image/automobile.png";

const AutomobileInfo = (props) => {
  return (
    <div onClick={props.onClick} className="automobile__container">
      <div className="image">
        <img src={Automobile} alt="car"></img>
      </div>

      <div className="infoName">
        <h3>AUTOMOBILE</h3>
        <p className="small">Model: {props.model} </p>
        <p className="small">VIN: {props.vin}</p>
        <p className={props.show ? "showTag" : "hiddenTag"}>Owner: </p>
      </div>
    </div>
  );
};

export default AutomobileInfo;
