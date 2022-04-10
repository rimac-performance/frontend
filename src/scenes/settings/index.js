import "./style.css";
import { ImageButton } from "../../components/atoms/buttons";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo/revPerformanceLogo.svg";
import {
  faKey,
  faWrench,
  faStarHalfStroke,
  faRightFromBracket,
  faUnlock,
} from "@fortawesome/free-solid-svg-icons";

const SettingsScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="screen__setting">
      <div className="header__setting">
        <img src={Logo} alt="logo" />
        <p className="title__setting">SETTINGS</p>
      </div>
      <div className="button__body">
        <ImageButton
          text={"CONTACT DEALER"}
          onClick={() => navigate({ pathname: "../contactDealer/" })}
          FontAwesomeIcon
          icon={faKey}
        ></ImageButton>
        <ImageButton
          text={"CONTACT DEVELOPER"}
          icon={faWrench}
          onClick={() => navigate({ pathname: "../contactDeveloper/" })}
        ></ImageButton>
        <ImageButton
          text={"LEAVE A REVIEW"}
          icon={faStarHalfStroke}
          onClick={() => navigate({ pathname: "../review/" })}
        ></ImageButton>
        <ImageButton
          text={"CHANGE PASSWORD"}
          icon={faUnlock}
          onClick={() => navigate({ pathname: "../changePassword/" })}
        ></ImageButton>
        <ImageButton
          text={"LOG OUT"}
          onClick={() => navigate({ pathname: "../logout/" })}
          icon={faRightFromBracket}
        ></ImageButton>
      </div>
    </div>
  );
};

export default SettingsScreen;
