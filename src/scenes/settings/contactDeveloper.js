import "./style.css";
import { PrimaryButton } from "../../components/atoms/buttons";
import { BackArrow } from "../../components/atoms/arrows";
import { useNavigate, useParams } from "react-router-dom";
import Logo from "../../assets/logo/revPerformanceLogo.svg";

const ContactDeveloper = () => {
  let params = useParams();
  const token = params.token;
  console.log(token);
  return (
    <>
      <div className="screen__setting">
        <BackArrow to={"../seeting/"} />
        <div className="header__setting">
          <img src={Logo} alt="logo" />
          <p className="title__setting">SETTINGS</p>
        </div>
        <div className="container">
          <h1>Contact Developer</h1>
          <p>
            Are you experiencing any diffculty with the app? Do you have any
            suggestions on how we can improve? Please email one of our developer
            below.
          </p>
          <PrimaryButton text={"EMAIL"}></PrimaryButton>
        </div>
      </div>
    </>
  );
};

export default ContactDeveloper;
