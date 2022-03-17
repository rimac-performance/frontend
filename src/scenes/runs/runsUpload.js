import "./runs.css";
import Logo from "../../assets/logo/revPerformanceLogo.svg";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PrimaryButton, SecondaryButton } from "../../components/atoms/buttons";
import { BackArrow } from "../../components/atoms/arrows";
import TextField from "../../components/atoms/text-fields/text-field";

const RunsUploadScreen = () => {
  let params = useParams();
  const token = params.token;
  const apiUrl = "https://rimacperformance-dev.ryacom.org/api/run";

  const [file, setFile] = useState(null);
  const [isSelected, setIsSelected] = useState(false);
  const [name, setName] = useState("");

  const handleName = (e) => {
    let { value } = e.currentTarget;
    setName({ value });
  };

  const fileSelectHandler = (e) => {
    setFile(e.target.files[0]);
    setIsSelected(true);
  };

  const sendFile = () => {
    if (isSelected && name != "") {
      console.log(`Sending ${file.name}`);
      const formData = new FormData();
      formData.append("File", file);
      console.log("POST arguments:");
      console.log(formData);

      fetch(apiUrl, {
        method: "POST",
        headers: { Authorization: "Bearer " + token },
        body: JSON.stringify({
          run: formData,
          name: name,
          car_id: params.car_id,
        }),
      })
        .then((response) => response.json())
        .then((result) => {
          console.log("Success:", result);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  return (
    <div className="screen__runs">
      <BackArrow to={"../runsList/" + params.car_id + "/" + params.token} />
      <div className="header__runs">
        <img src={Logo} alt="logo" />
        <p className="title__runs">New Run</p>
        <div className="img__model">
          <img
            src="https://ichef.bbci.co.uk/news/976/cpsprodpb/156FE/production/_116860878_c_two1.jpg"
            alt="car"
          />
        </div>
      </div>
      {isSelected ? (
        <div className="upload__info">
          <p>File: {file.name}</p>
          <p>{file.size / 1000} kb</p>
          <TextField width="100%" onChange={handleName} placeholder="NAME" />
        </div>
      ) : (
        <div className="upload__info">
          <p>No file selected</p>
        </div>
      )}
      <div className="upload__runs">
        <input type="file" id="run__uploader" onChange={fileSelectHandler} />
        <label
          for="run__uploader"
          style={{ display: "block" }}
          className="button__primary"
        >
          Select a CSV
        </label>
      </div>
      <div className="upload__submission">
        <SecondaryButton text="Confirm" onClick={sendFile} />
      </div>
    </div>
  );
};

export default RunsUploadScreen;
