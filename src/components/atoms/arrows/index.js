import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import "./arrows.css";

export const BackArrow = () => {
  const onClick = () => {
    return;
  };

  return (
    <div className="arrow__back">
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
