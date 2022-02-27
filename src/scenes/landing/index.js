import {
  PrimaryButton,
  SecondaryButton,
} from "../../components/atoms/buttons/index";
import Logo from "../../assets/image/Logo.png";
import { Link } from "react-router-dom";
import "./style.css";

const Landing = () => {
  return (
    <>
      <div className="logo">
        <img src={Logo}></img>
      </div>
      <div className="container">
        <Link to={"/login"}>
          <PrimaryButton text={"LOG IN"}></PrimaryButton>
        </Link>
        <Link to={"/create"}>
          <SecondaryButton text={"CREATE ACCOUNT"}></SecondaryButton>
        </Link>
        <a href={"../changePassword"}>Forgot Your Password?</a>
      </div>

      <a className="bottom" href={"../termOfService"}>
        Terms of Service
      </a>
    </>
  );
};

export default Landing;
