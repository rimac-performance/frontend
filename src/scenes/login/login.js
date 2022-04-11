import Logo from "../../assets/image/Logo.png";
import { SecondaryButton } from "../../components/atoms/buttons/index";
import { useState } from "react";
import TextField from "../../components/atoms/text-fields/text-field";
import { BackArrow } from "../../components/atoms/arrows";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { setToken } from "../../utils/token";
import jwt_decode from "jwt-decode";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

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

  function login() {
    fetch("https://revperformance-dev.ryacom.org/api/user", {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.value,
        pswd: password.value,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        console.log(jwt_decode(response.token));
        setToken(response.token);
        navigate({ pathname: "/home/" });
      });
  }

  return (
    <>
      <BackArrow to={"/"}></BackArrow>
      <div className="logo">
        <img src={Logo}></img>
      </div>
      <div className="container">
        <form onSubmit={login}>
          <TextField
            onChange={handleEmailInput}
            placeholder={"Email"}
          ></TextField>
          <TextField
            onChange={handlePasswordInput}
            type={"password"}
            placeholder={"Password"}
          ></TextField>
          <SecondaryButton text={"Log In "} onClick={login}></SecondaryButton>
        </form>
        <a href={"../changePassword"}>Forgot Your Password?</a>
      </div>
    </>
  );
};
export default Login;
