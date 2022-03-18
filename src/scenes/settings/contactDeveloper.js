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
      <BackArrow></BackArrow>
      <div className="container">
        <img src={Logo} alt="logo" />
        <h1>Contact Developer</h1>
        <p>
          Are you experiencing any diffculty with the app? Do you have any
          suggestions on how we can improve? Please email one of our developer
          below.
        </p>
        <PrimaryButton text={"EMAIL"}></PrimaryButton>
      </div>
    </>
  );
};

export default ContactDeveloper;
