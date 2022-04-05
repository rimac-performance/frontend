import "./style.css";
import { PrimaryButton, ImageButton } from "../../components/atoms/buttons";
import { useNavigate, useParams } from "react-router-dom";
import Logo from "../../assets/logo/revPerformanceLogo.svg";
import {
  faKey,
  faWrench,
  faStarHalfStroke,
  faRightFromBracket,
  faUnlock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SettingsScreen = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="screen__setting">
        <div className="header__setting">
          <img src={Logo} alt="logo" />
          <p className="title__setting">SETTINGS</p>
        </div>
        <div className="button_body">
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
    </>
  );
};

export default SettingsScreen;
