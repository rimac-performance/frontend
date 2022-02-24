import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./arrows.css";

export const BackArrow = () => {
  const navigate = useNavigate()

  return (
    <div className="arrow__back" onClick={() => navigate(-1)} >
      <FontAwesomeIcon icon={faCaretLeft} />
      <label>Back</label>
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
