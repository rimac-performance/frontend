import "./style.css";
import { BackArrow } from "../../components/atoms/arrows";
import { useParams } from "react-router-dom";
import ButtonMailto from "../../components/atoms/buttonmailto/buttonmailto";
import Logo from "../../assets/logo/revPerformanceLogo.svg";
const Review = () => {
  return (
    <>
      <div className="screen__setting">
        <BackArrow to={"../settings/"} />
        <div className="header__setting">
          <img src={Logo} alt="logo" />
          <p className="title__setting">SETTINGS</p>
        </div>
        <div className="container__settings">
          <h1>Review</h1>
          <p>Want to tell us how we are doing? Send us an email below!</p>
          <ButtonMailto />
        </div>
      </div>
    </>
  );
};

export default Review;
