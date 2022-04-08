import "./style.css";
import { PrimaryButton, SecondaryButton } from "../../components/atoms/buttons";
import { BackArrow } from "../../components/atoms/arrows";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import TextField from "../../components/atoms/text-fields/text-field";
import { validate, validatePass } from "../../utils/validate";

const ResetPassword = () => {
  const navigate = useNavigate();
  const params = useParams();
  const code = params.code;
  const [hasCode, setHasCode] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordConfirmError, setPasswordConfirmError] = useState(false);

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

  function reset() {
    let flag = true;

    if (validate(email)) {
      setEmailError(false);
    } else {
      setEmailError(true);
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
      fetch("https://revperformance-dev.ryacom.org/api/user/reset", {
        method: "PUT",
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.value,
          pswd: password.value,
          resetCode: code,
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          navigate({ pathname: "/" });
        });
    }
  }

  useEffect(() => {
    if (code != null) {
      setHasCode(true);
    } else {
      setHasCode(false);
    }
  }, []);

  return (
    <>
      {hasCode ? (
        <>
          <div className="container">
            <form onSubmit={reset}>
              <label className="label__create__account">Email</label>
              <TextField
                onChange={handleEmailInput}
                error={emailError}
              ></TextField>
              <label className="label__create__account">Password</label>
              <TextField
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
              <SecondaryButton
                text={"Set new password"}
                onClick={reset}
              ></SecondaryButton>
            </form>
          </div>
        </>
      ) : (
        <>
          <BackArrow to={"/"}></BackArrow>
          <div className="container">
            <h2>Password Reset</h2>
            <p>
              Thank You! You should receive an email with a link to reset your
              password
            </p>
            <PrimaryButton
              text={"OK"}
              onClick={() => {
                navigate("/");
              }}
            ></PrimaryButton>
          </div>
        </>
      )}
    </>
  );
};

export default ResetPassword;
