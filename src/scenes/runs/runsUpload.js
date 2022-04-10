import "./runs.css";
import Logo from "../../assets/logo/revPerformanceLogo.svg";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SecondaryButton } from "../../components/atoms/buttons";
import { BackArrow } from "../../components/atoms/arrows";
import TextField from "../../components/atoms/text-fields/text-field";
import { getToken } from "../../utils/token";
import Automobile from "../../assets/image/automobile.png";

const RunsUploadScreen = () => {
  let params = useParams();
  let navigate = useNavigate();
  const token = getToken();
  const apiUrl = "https://rimacperformance-dev.ryacom.org/api/run";

  const [file, setFile] = useState(null);
  const [isSelected, setIsSelected] = useState(false);
  const [name, setName] = useState("");

  const handleName = (e) => {
    let { value } = e.currentTarget;
    setName(value);
  };

  const fileSelectHandler = (e) => {
    if (e.target.files[0] != null) {
      console.log(e.target.files[0]);
      setFile(e.target.files[0]);
      setIsSelected(true);
    }
  };

  const sendFile = () => {
    console.log(file.name + " of type " + file.type);
    if (isSelected && name !== "") {
      console.log(`Sending ${file.name}`);
      const formData = new FormData();
      formData.append("run", file);
      formData.append("name", name);
      formData.append("car_id", params.car_id);

      fetch(apiUrl, {
        method: "POST",
        headers: { Authorization: "Bearer " + token },
        body: formData,
      })
        .then((response) => response.json())
        .then((result) => {
          console.log("Success:", result);
          navigate({
            pathname: `../runsList/${params.model}/${params.car_id}`,
          });
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  return (
    <div className="screen__runs">
      <BackArrow to={`../runsList/${params.model}/${params.car_id}`} />
      <div className="header__runs">
        <img src={Logo} alt="logo" />
        <p className="title__runs">New Run</p>
        <div className="img__model">
          <img src={Automobile} alt="car" />
        </div>
      </div>
      <div className="upload__info__caption">
        <p>Please select a Rev Performance vehicle data CSV</p>
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
        <input
          type="file"
          id="run__uploader"
          onChange={fileSelectHandler}
          accept=".csv"
        />
        <label
          htmlFor="run__uploader"
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
