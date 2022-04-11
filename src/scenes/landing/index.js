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
      <div className="container">
        <div className="logo">
          <img src={Logo}></img>
        </div>
        <Link to={"/login"}>
          <PrimaryButton text={"Log In"}></PrimaryButton>
        </Link>
        <Link to={"/create"}>
          <SecondaryButton text={"Create Account"}></SecondaryButton>
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
