import "./style.css";
import { PrimaryButton } from "../../components/atoms/buttons";
import { BackArrow } from "../../components/atoms/arrows";
import Logo from "../../assets/logo/revPerformanceLogo.svg";
const Review = () => {
  return (
    <>
      <BackArrow></BackArrow>
      <div className="container">
        <img src={Logo} alt="logo" />
        <h1>Review</h1>
        <p>
          Want to tell us how we are doing? Head to the app store below and give
          us a review!
        </p>
        <PrimaryButton text={"REVIEW"}></PrimaryButton>
      </div>
    </>
  );
};

export default Review;
