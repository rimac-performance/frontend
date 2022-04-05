import "./style.css";
import { BackArrow } from "../../components/atoms/arrows";
import { useParams } from "react-router-dom";
import Logo from "../../assets/logo/revPerformanceLogo.svg";
import { PrimaryButton } from "../../components/atoms/buttons";
import TextField from "../../components/atoms/text-fields/text-field";
import { useState } from "react";

const ChangePassword_setting = () => {
  let params = useParams();
  const token = params.token;
  console.log(token);

  const [password, setPassword] = useState("");

  const handleOldPasswordInput = (e) => {
    const { value } = e.currentTarget;
    setPassword({
      value,
    });
  };
  const handleNewPasswordInput = (e) => {
    const { value } = e.currentTarget;
    setPassword({
      value,
    });
  };

  const changePassword = () => {
    console.log(password);
  };

  return (
    <>
      <div className="screen__setting">
        <BackArrow to={"../seeting/"} />
        <div className="header__setting">
          <img src={Logo} alt="logo" />
          <p className="title__setting">SETTINGS</p>
        </div>
        <div className="container">
          <h1>Change Password</h1>
          <p>
            New passwords must be at least 8 characters long, with at least one
            letter and one number.
          </p>
          <TextField
            type={"password"}
            placeholder={"Old Password"}
            onChange={handleOldPasswordInput}
          ></TextField>
          <TextField
            type={"password"}
            placeholder={"New Password"}
            onChange={handleNewPasswordInput}
          ></TextField>
          <TextField
            type={"password"}
            placeholder={"Comfirm Password"}
            onChange={handleNewPasswordInput}
          ></TextField>
          <PrimaryButton text={"CHANGE PASSWORD"} onClick={changePassword}>
            {" "}
          </PrimaryButton>
        </div>
      </div>
    </>
  );
};

export default ChangePassword_setting;
