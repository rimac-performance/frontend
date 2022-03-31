import "./chips.css";

export const Chips = ({ text1, text2, onClick, selected }) => {
  return (
    <div className="chip-container">
      <div
        name={text1}
        className={`chip ${selected === text1 && "chip__active"}`}
        onClick={() => onClick(text1)}
      >
        <label>{text1}</label>
      </div>
      <div className="chip__spacer" />
      <div
        name={text2}
        className={`chip ${selected === text2 && "chip__active"}`}
        onClick={() => onClick(text2)}
      >
        <label>{text2}</label>
      </div>
    </div>
  );
};
