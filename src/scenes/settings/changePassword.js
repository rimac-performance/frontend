import "./style.css";
import { BackArrow } from "../../components/atoms/arrows";
import Logo from "../../assets/logo/revPerformanceLogo.svg";
import { PrimaryButton } from "../../components/atoms/buttons";
import TextField from "../../components/atoms/text-fields/text-field";
import { useState } from "react";
import { getToken } from "../../utils/token";
import { validate, validatePass } from "../../utils/validate";
import { useNavigate } from "react-router-dom";

const ChangePassword_setting = () => {
  const token = getToken();
  const navigate = useNavigate();
  const apiUrl = "https://rimacperformance-dev.ryacom.org/api/user/password";

  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [passwordError, setPasswordError] = useState(false);
  const [passwordConfirmError, setPasswordConfirmError] = useState(false);

  const handleNewPasswordInput = (e) => {
    const { value } = e.currentTarget;
    setPassword({
      value,
    });
  };

  const handleConfirmPasswordInput = (e) => {
    const { value } = e.currentTarget;
    setPasswordConfirm({
      value,
    });
  };

  const changePassword = () => {
    let flag = true;

    if (validate(password)) {
      setPasswordError(false);
    } else {
      setPasswordError(true);
      flag = false;
    }
    if (validatePass(password.value, passwordConfirm.value)) {
      setPasswordConfirmError(false);
    } else {
      setPasswordConfirmError(true);
      flag = false;
    }

    if (flag) {
      fetch(apiUrl, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          pswd: password.value,
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          navigate("../settings/");
        });
    }
  };

  return (
    <div className="screen__setting">
      <BackArrow to={"../settings/"} />
      <div className="header__setting">
        <img src={Logo} alt="logo" />
        <p className="title__setting">SETTINGS</p>
      </div>
      <div className="container__settings">
        <h1>Change Password</h1>
        <p>
          New passwords must be at least 8 characters long, with at least one
          letter and one number.
        </p>
        <TextField
          type={"password"}
          placeholder={"New Password"}
          onChange={handleNewPasswordInput}
          error={passwordError}
        ></TextField>
        <TextField
          type={"password"}
          placeholder={"Confirm Password"}
          onChange={handleConfirmPasswordInput}
          error={passwordConfirmError}
        ></TextField>
        <PrimaryButton text={"Change Password"} onClick={changePassword}>
          {" "}
        </PrimaryButton>
      </div>
    </div>
  );
};

export default ChangePassword_setting;
