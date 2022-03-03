import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./arrows.css";

export const BackArrow = ({ to }) => {
  const navigate = useNavigate();

  return (
    <div className="arrow__back" onClick={() => navigate(-1)}>
      <FontAwesomeIcon icon={faCaretLeft} />
      <label
        onClick={() => {
          console.log(to);
          navigate({ pathname: to }, { replace: true });
        }}
      >
        Back
      </label>
    </div>
  );
};

export const FilterArrow = ({ text }) => {
  const onClick = () => {
    return;
  };

  return (
    <div className="arrow__filter">
      <FontAwesomeIcon icon={faCaretDown} />
      <label>Filter</label>
    </div>
  );
};
