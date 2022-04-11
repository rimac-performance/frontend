import Logo from "../../assets/image/Logo.png";
import { SecondaryButton } from "../../components/atoms/buttons/index";
import { useState } from "react";
import TextField from "../../components/atoms/text-fields/text-field";
import { CheckBox } from "../../components/atoms/checkboxes/index";
import { BackArrow } from "../../components/atoms/arrows";
import { validate, validatePass } from "../../utils/validate";
import { useNavigate } from "react-router-dom";
import "./style.css";

const CreateAccount = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [tosIsChecked, setTosIsChecked] = useState(false);

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordConfirmError, setPasswordConfirmError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

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

  function create() {
    let flag = true;

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
      fetch("https://revperformance-dev.ryacom.org/api/user/register", {
        method: "POST",
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: firstName.value,
          last_name: lastName.value,
          pswd: password.value,
          phone: phone.value,
          email: email.value,
        }),
      }).then((value) => {
        console.log(value);
        navigate("/");
      });
    }
  }

  const enableSubmit = () => {
    if (!tosIsChecked) {
      setTosIsChecked(true);
    } else {
      setTosIsChecked(false);
    }
  };

  return (
    <>
      <BackArrow to={"/"}></BackArrow>
      <img className="logo__create__account" src={Logo}></img>
      <div>
        <form>
          <label className="label__create__account">First Name</label>
          <TextField
            onChange={handleFirstNameInput}
            error={firstNameError}
          ></TextField>
          <label className="label__create__account">Last Name</label>
          <TextField
            onChange={handleLastNameInput}
            error={lastNameError}
          ></TextField>
          <label className="label__create__account">Email</label>
          <TextField onChange={handleEmailInput} error={emailError}></TextField>
          <label className="label__create__account">Phone</label>
          <TextField onChange={handlePhoneInput} error={phoneError}></TextField>
          <label className="label__create__account">Password</label>
          <TextField
            errorMsg={`Passwords must be at least 8 characters long, containing at least one letter and one number.`}
            onChange={handlePasswordInput}
            type={"password"}
            error={passwordError}
          ></TextField>
          <label className="label__create__account">Confirm Password</label>
          <TextField
            onChange={handlePasswordConfirmInput}
            type={"password"}
            error={passwordConfirmError}
          ></TextField>
          {tosIsChecked ? (
            <SecondaryButton
              text={"CREATE ACCOUNT "}
              onClick={create}
            ></SecondaryButton>
          ) : (
            <div className="create__account__disabled">
              <SecondaryButton text={"Create Account"} onClick={() => {}} />
            </div>
          )}
          <CheckBox
            text={"I Accept The Terms of Use"}
            name={"checkbox__tos"}
            onChange={enableSubmit}
            checked={tosIsChecked}
          ></CheckBox>
        </form>
      </div>
    </>
  );
};
export default CreateAccount;
