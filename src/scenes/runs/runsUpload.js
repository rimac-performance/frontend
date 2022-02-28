import "./runs.css";
import Logo from "../../assets/logo/revPerformanceLogo.svg";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PrimaryButton } from "../../components/atoms/buttons";
import { BackArrow } from "../../components/atoms/arrows";

const RunsUploadScreen = () => {
    let params = useParams();

    const sendFile = () => {

    }

    return (
      <div className="screen__runs">
          <BackArrow />
        <div className="header__runs">
          <img src={Logo} alt="logo"/>
          <p className="title__runs">New Run</p>
          <div className="img__model">
            <img src = "https://ichef.bbci.co.uk/news/976/cpsprodpb/156FE/production/_116860878_c_two1.jpg" alt = "car" />
          </div>
        </div>
      <div className="upload__runs">
        <PrimaryButton text="Select CSV" onClick={() => console.log("choose file")} />
      </div>
    </div>
    )
}

export default RunsUploadScreen