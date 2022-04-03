import Logo from "../../assets/image/Logo.png";
import { SecondaryButton } from "../../components/atoms/buttons/index";
import { useState } from "react";
import TextField from "../../components/atoms/text-fields/text-field";
import { BackArrow } from "../../components/atoms/arrows";
import {
  validate,
  validatePass,
  validatePermission,
} from "../../utils/validate";
import { getToken } from "../../utils/token";
import { useNavigate, useParams } from "react-router-dom";

const AdminEditUserScreen = () => {
  const apiUrl = "https://revperformance-dev.ryacom.org/api/admin";
  const token = getToken();
  const navigate = useNavigate();
  const params = useParams();
  const userArr = params.args.split(",");
  const userID = userArr[5];

  const [email, setEmail] = useState({ value: userArr[2] });
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [firstName, setFirstName] = useState({ value: userArr[0] });
  const [lastName, setLastName] = useState({ value: userArr[1] });
  const [phone, setPhone] = useState({ value: userArr[3] });
  const [permission, setPermission] = useState({ value: parseInt(userArr[4]) });

  const [emailError, setEmailError] = useState(false);
  const [passwordConfirmError, setPasswordConfirmError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [permissionError, setPermissionError] = useState(false);

  const handleEmailInput = (e) => {
    const { value } = e.currentTarget;
    setEmail({
      value,
    });
  };
  const handlePasswordInput = (e) => {
    const { value } = e.currentTarget;
    setPassword({
      value,
    });
  };
  const handlePasswordConfirmInput = (e) => {
    const { value } = e.currentTarget;
    setPasswordConfirm({
      value,
    });
  };
  const handleFirstNameInput = (e) => {
    const { value } = e.currentTarget;
    setFirstName({
      value,
    });
  };
  const handleLastNameInput = (e) => {
    const { value } = e.currentTarget;
    setLastName({
      value,
    });
  };
  const handlePhoneInput = (e) => {
    const { value } = e.currentTarget;
    setPhone({
      value,
    });
  };
  const handlePermissionInput = (e) => {
    const { value } = e.currentTarget;
    setPermission({
      value,
    });
  };

  function create() {
    let flag = true;
    let passOption = false;

    if (validate(firstName)) {
      setFirstNameError(false);
    } else {
      setFirstNameError(true);
      flag = false;
    }
    if (validate(lastName)) {
      setLastNameError(false);
    } else {
      setLastNameError(true);
      flag = false;
    }
    if (validate(email)) {
      setEmailError(false);
    } else {
      setEmailError(true);
      flag = false;
    }
    if (validate(phone)) {
      setPhoneError(false);
    } else {
      setPhoneError(true);
      flag = false;
    }
    if (validate(password)) {
      passOption = true;
    } else {
      passOption = false;
    }
    if (validatePass(password.value, passwordConfirm.value)) {
      setPasswordConfirmError(false);
    } else {
      setPasswordConfirmError(true);
      flag = false;
    }
    if (validatePermission(permission.value)) {
      setPermissionError(false);
    } else {
      setPermissionError(true);
      flag = false;
    }

    let msgBody;

    if (passOption) {
      msgBody = JSON.stringify({
        first_name: firstName.value,
        last_name: lastName.value,
        pswd: password.value,
        phone: phone.value,
        email: email.value,
        user_role: parseInt(permission.value),
        user_id: userID,
      });
    } else {
      msgBody = JSON.stringify({
        first_name: firstName.value,
        last_name: lastName.value,
        phone: phone.value,
        email: email.value,
        user_role: parseInt(permission.value),
        user_id: userID,
      });
    }

    if (flag) {
      fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: msgBody,
      }).then((value) => {
        console.log(value);
        navigate({ pathname: "../admin" });
      });
    }
  }

  return (
    <div className="screen__admin">
      <BackArrow to={"../admin"}></BackArrow>
      <img className="logo__create__account" src={Logo}></img>
      <form>
        <label className="label__create__account">First Name</label>
        <TextField
          onChange={handleFirstNameInput}
          error={firstNameError}
          value={firstName.value}
        ></TextField>
        <label className="label__create__account">Last Name</label>
        <TextField
          onChange={handleLastNameInput}
          error={lastNameError}
          value={lastName.value}
        ></TextField>
        <label className="label__create__account">Email</label>
        <TextField
          onChange={handleEmailInput}
          error={emailError}
          value={email.value}
        ></TextField>
        <label className="label__create__account">Phone</label>
        <TextField
          onChange={handlePhoneInput}
          error={phoneError}
          value={phone.value}
        ></TextField>
        <label className="label__create__account">Password</label>
        <TextField onChange={handlePasswordInput} type={"password"}></TextField>
        <label className="label__create__account">Confirm Password</label>
        <TextField
          onChange={handlePasswordConfirmInput}
          type={"password"}
          error={passwordConfirmError}
        ></TextField>
        <label className="label__create__account">Permission Level</label>
        <TextField
          onChange={handlePermissionInput}
          placeholder={"1, 2, or 3"}
          error={permissionError}
          value={permission.value}
        ></TextField>
        <SecondaryButton
          text={"Update Account"}
          onClick={create}
        ></SecondaryButton>
      </form>
    </div>
  );
};

export default AdminEditUserScreen;
