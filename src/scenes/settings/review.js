import "./style.css";
import { PrimaryButton } from "../../components/atoms/buttons";
import { BackArrow } from "../../components/atoms/arrows";
import Logo from "../../assets/logo/revPerformanceLogo.svg";
const Review = () => {
  return (
    <>
      <div className="screen__setting">
        <BackArrow to={"../seeting/"} />
        <div className="header__setting">
          <img src={Logo} alt="logo" />
          <p className="title__setting">SETTINGS</p>
        </div>
        <div className="container">
          <h1>Review</h1>
          <p>
            Want to tell us how we are doing? Head to the app store below and
            give us a review!
          </p>
          <PrimaryButton text={"REVIEW"}></PrimaryButton>
        </div>
      </div>
    </>
  );
};

export default Review;
