import TextField from "../../components/atoms/text-fields/text-field";
import Logo from "../../assets/logo/revPerformanceLogo.svg";
import "./style.css";
import { useState } from "react";
import { PrimaryButton } from "../../components/atoms/buttons";
import { useNavigate } from "react-router-dom";

const CommunityScreen = () => {
  const navigate = useNavigate();

  const [run_id, setRunID] = useState("");

  const handleRunIDInput = (e) => {
    const { value } = e.currentTarget;
    setRunID({
      value,
    });
  };

  const search = () => {
    navigate({ pathname: `../analysis/${run_id.value}` });
  };

  return (
    <>
      <div className="screen__community ">
        <div className="header__community">
          <img src={Logo} alt="logo" />
          <p className="title__community">COMMUNITY</p>
        </div>
        <TextField
          placeholder={"Search by Run ID"}
          onChange={handleRunIDInput}
        ></TextField>
        <PrimaryButton text="SEARCH" onClick={search} />
      </div>
    </>
  );
};

export default CommunityScreen;
