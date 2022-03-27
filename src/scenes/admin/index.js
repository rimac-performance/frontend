import Logo from "../../assets/image/Logo.png";
import { SecondaryButton } from "../../components/atoms/buttons/index";
import { useState } from "react";
import TextField from "../../components/atoms/text-fields/text-field";
import "./admin.css";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { setToken } from "../../utils/token";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

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
        let user = jwt_decode(response.token);
        console.log(user);
        if (user.user_role === 3) {
          setError(false);
          setToken(response.token);
          navigate({ pathname: `userManagement` });
        } else {
          setError(true);
        }
      });
  }

  return (
    <>
      <div className="header__cars">
        <img src={Logo} alt="logo" />
        <p className="title__cars">System Administrator Login</p>
      </div>
      <div className="container">
        {error ? (
          <div className="login__admin__error">
            <p>
              This user does not have permission to access administrator
              functions
            </p>
          </div>
        ) : (
          <div>
            <p />
          </div>
        )}
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
          <SecondaryButton text={"LOG IN "} onClick={login}></SecondaryButton>
        </form>
      </div>
    </>
  );
};
export default AdminLogin;
