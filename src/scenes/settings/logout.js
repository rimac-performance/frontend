import "./style.css";
import { PrimaryButton } from "../../components/atoms/buttons";
import { BackArrow } from "../../components/atoms/arrows";
import Logo from "../../assets/logo/revPerformanceLogo.svg";
const LogOut = () => {
  return (
    <>
      <BackArrow></BackArrow>
      <div className="container">
        <img src={Logo} alt="logo" />
        <h1>Log Out</h1>
        <p>Are you sure you would like to be logged out?</p>
        <PrimaryButton text={"LOG OUT"}></PrimaryButton>
      </div>
    </>
  );
};

export default LogOut;
