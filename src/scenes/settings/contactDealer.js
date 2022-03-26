import "./style.css";
import { PrimaryButton } from "../../components/atoms/buttons";
import { BackArrow } from "../../components/atoms/arrows";
import { useNavigate, useParams } from "react-router-dom";
import Logo from "../../assets/logo/revPerformanceLogo.svg";

const ContactDealer = () => {
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
          <h1>Contact Dealer</h1>
          <p>
            Your dealer is Rev cars of Rochester, New York. Click below to email
            your dealership.
          </p>
          <PrimaryButton text={"EMAIL"}></PrimaryButton>
        </div>
      </div>
    </>
  );
};

export default ContactDealer;
