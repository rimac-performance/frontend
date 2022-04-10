import "./style.css";
import { BackArrow } from "../../components/atoms/arrows";
import ButtonMailto from "../../components/atoms/buttonmailto/buttonmailto";
import Logo from "../../assets/logo/revPerformanceLogo.svg";

const ContactDealer = () => {
  return (
    <div className="screen__setting">
      <BackArrow to={"../settings/"} />
      <div className="header__setting">
        <img src={Logo} alt="logo" />
        <p className="title__setting">SETTINGS</p>
      </div>
      <div className="container__settings">
        <h1>Contact Dealer</h1>
        <p>
          Your dealer is Rev cars of Rochester, New York. Click below to email
          your dealership.
        </p>
        <ButtonMailto />
      </div>
    </div>
  );
};

export default ContactDealer;
