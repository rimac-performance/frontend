import "./style.css";
import { PrimaryButton } from "../../components/atoms/buttons";
import { BackArrow } from "../../components/atoms/arrows";
import Logo from "../../assets/logo/revPerformanceLogo.svg";
const LogOut = () => {
  return (
    <>
      <div className="screen__setting">
        <BackArrow to={"../seeting/"} />
        <div className="header__setting">
          <img src={Logo} alt="logo" />
          <p className="title__setting">SETTINGS</p>
        </div>
        <div className="container">
          <h1>Log Out</h1>
          <p>Are you sure you would like to be logged out?</p>
          <PrimaryButton text={"LOG OUT"}></PrimaryButton>
        </div>
      </div>
    </>
  );
};

export default LogOut;
