import "./chips.css";

export const Chips = ({ text1, text2 }) => {
  return (
    <div className="chip">
      <div name={text1} className="chip__active">
        <label>{text1}</label>
      </div>
      <div className="chip__spacer" />
      <div name={text2} className="chip__inactive">
        <label>{text2}</label>
      </div>
    </div>
  );
};
