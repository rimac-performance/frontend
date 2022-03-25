import TextField from "../../components/atoms/text-fields/text-field";
import Logo from "../../assets/logo/revPerformanceLogo.svg";
import "./style.css";
import { useState } from "react";
import { PrimaryButton } from "../../components/atoms/buttons";
import { useNavigate } from "react-router-dom";

const CommunityScreen = () => {
  const navigate = useNavigate();
  const [runs, setRuns] = useState([
    {
      email: "zxc9821@rit.edu",
      run_id: "f6e94195-d71d-4301-b21f-6bbc613653fd",
    },
    {
      email: "zxc9821@rit.edu",
      run_id: "f6e94195-4301-d71d-b21f-6bbc613653fd",
    },
  ]);

  const [run_id, setRunID] = useState("");

  const handleRunIDInput = (e) => {
    const { value } = e.currentTarget;
    setRunID({
      value,
    });
  };

  const search = () => {
    console.log(run_id);
    //navigate({ pathname: "../../analysis" });
  };

  return (
    <>
      <div className="screen__community ">
        <div className="header__community">
          <img src={Logo} alt="logo" />
          <p className="title__community">COMMUNITY</p>
        </div>
        <TextField
          width={"85%"}
          placeholder={"Search by Run ID"}
          onChange={handleRunIDInput}
        ></TextField>
        <PrimaryButton text="SEARCH" onClick={search} />
        <div className="table_community">
          <h2>FEATURED RUNS</h2>
          <table>
            <tbody>
              <tr>
                <td>User</td>
                <td>Run ID</td>
              </tr>
              {runs.map((run, index) => (
                <tr key={index}>
                  <td>{run.email}</td>
                  <td>{run.run_id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CommunityScreen;
