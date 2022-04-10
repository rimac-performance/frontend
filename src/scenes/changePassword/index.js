import "./style.css";
import { useState } from "react";
import TextField from "../../components/atoms/text-fields/text-field";
import { PrimaryButton } from "../../components/atoms/buttons";
import { BackArrow } from "../../components/atoms/arrows";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleEmailInput = (e) => {
    const { value } = e.currentTarget;

    setEmail({
      value,
    });
  };
  function forgot() {
    fetch("https://rimacperformance-dev.ryacom.org/api/user/forgot", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.value,
      }),
    }).then((value) => {
      console.log(value.status);
      let status = value.status;

      switch (status) {
        case 200:
          console.log("Success");
          navigate("../resetPassword");
          break;
        case 404:
          console.log("There is a error");
          navigate("../errorPassword");
          break;
        default:
        //pop up error message
      }
    });
  }

  return (
    <>
      <BackArrow to={"/"}></BackArrow>
      <div className="container">
        <h2>Forgot Your Password?</h2>
        <p>
          Enter your registered email below to receive password reset
          instructions
        </p>
        <TextField
          onChange={handleEmailInput}
          placeholder={"Please Enter your email"}
        ></TextField>
        <PrimaryButton text={"Send"} onClick={forgot}></PrimaryButton>
      </div>
    </>
  );
};

export default ChangePassword;
