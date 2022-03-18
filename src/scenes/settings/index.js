import "./style.css";
import { PrimaryButton, ImageButton } from "../../components/atoms/buttons";
import { useNavigate, useParams } from "react-router-dom";
import Logo from "../../assets/logo/revPerformanceLogo.svg";

const SettingsScreen = () => {
  const navigate = useNavigate();

  const contactDealer = () => {
    navigate({ pathname: "../contactDealer" });
  };
  const contactDeveloper = () => {
    navigate({ pathname: "../contactDeveloper" });
  };
  const review = () => {
    navigate({ pathname: "../review" });
  };
  const logout = () => {
    navigate({ pathname: "../logout" });
  };

  return (
    <>
      <div className="screen__setting">
        <div className="header__setting">
          <img src={Logo} alt="logo" />
          <p className="title__setting">SETTINGS</p>
        </div>
        <ImageButton
          text={"CONTACT DEALER"}
          onClick={contactDealer}
        ></ImageButton>
        <ImageButton
          text={"CONTACT DEVELOPER"}
          onClick={contactDeveloper}
        ></ImageButton>
        <ImageButton text={"LEAVE A REVIEW"} onClick={review}></ImageButton>
        <ImageButton text={"LOG OUT"} onClick={logout}></ImageButton>
      </div>
    </>
  );
};

export default SettingsScreen;
