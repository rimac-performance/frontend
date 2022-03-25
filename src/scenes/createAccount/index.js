import Logo from "../../assets/image/Logo.png";
import { SecondaryButton } from "../../components/atoms/buttons/index";
import { useState } from "react";
import TextField from "../../components/atoms/text-fields/text-field";
import { CheckBox } from "../../components/atoms/checkboxes/index";
import { BackArrow } from "../../components/atoms/arrows";
import "./style.css";

const CreateAccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [phone, setphone] = useState("");

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
  const handleFirstNameInput = (e) => {
    const { value } = e.currentTarget;
    setfirstname({
      value,
    });
  };
  const handleLastNameInput = (e) => {
    const { value } = e.currentTarget;
    setlastname({
      value,
    });
  };
  const handlePhoneInput = (e) => {
    const { value } = e.currentTarget;
    setphone({
      value,
    });
  };

  function create() {
    fetch("https://revperformance-dev.ryacom.org/api/user/register", {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: firstname.value,
        last_name: lastname.value,
        pswd: password.value,
        phone: phone.value,
        email: email.value,
      }),
    }).then((value) => {
      console.log(value);
    });
  }

  return (
    <>
      <BackArrow to={"/"}></BackArrow>
      <img className="logo__create__account" src={Logo}></img>
      <div>
        <form>
          <label className="label__create__account">First Name</label>
          <TextField onChange={handleFirstNameInput}></TextField>
          <label className="label__create__account">Last Name</label>
          <TextField onChange={handleLastNameInput}></TextField>
          <label className="label__create__account">Email</label>
          <TextField onChange={handleEmailInput}></TextField>
          <label className="label__create__account">Phone</label>
          <TextField onChange={handlePhoneInput}></TextField>
          <label className="label__create__account">Password</label>
          <TextField
            onChange={handlePasswordInput}
            type={"password"}
          ></TextField>
          <label className="label__create__account">Confirm Password</label>
          <TextField
            onChange={handlePasswordInput}
            type={"password"}
          ></TextField>
          <SecondaryButton
            text={"CREATE ACCOUNT "}
            onClick={create}
          ></SecondaryButton>
          <CheckBox text={"I Accept The Terms of Use"}></CheckBox>
        </form>
      </div>
    </>
  );
};
export default CreateAccount;
