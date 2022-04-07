import "./style.css";
import { BackArrow } from "../../components/atoms/arrows";
import { useParams } from "react-router-dom";
import ButtonMailto from "../../components/atoms/buttonmailto/buttonmailto";
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
          <ButtonMailto />
        </div>
      </div>
    </>
  );
};

export default ContactDeveloper;
