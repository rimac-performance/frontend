import React from "react";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../buttons";

const ButtonMailto = () => {
  return (
    <Link
      to="#"
      onClick={(e) => {
        window.location.href = "mailto:revperformanceteam@gmail.com";
        e.preventDefault();
      }}
    >
      <PrimaryButton text={"EMAIL"}></PrimaryButton>
    </Link>
  );
};

export default ButtonMailto;
