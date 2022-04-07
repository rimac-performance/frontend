import "./style.css";
import { BackArrow } from "../../components/atoms/arrows";
import { useParams } from "react-router-dom";
import ButtonMailto from "../../components/atoms/buttonmailto/buttonmailto";
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
          <ButtonMailto />
        </div>
      </div>
    </>
  );
};

export default ContactDealer;
