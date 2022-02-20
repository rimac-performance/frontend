import "./chips.css";

export const Chips = ({ text1, text2 }) => {
  const onClick = () => {
    return;
  };

  return (
    <div className="chip">
      <div className="chip__spacer" />
      <div className="chip__active">
        <label>{text1}</label>
      </div>
      <div className="chip__spacer__center" />
      <div className="chip__inactive">
        <label>{text2}</label>
      </div>
      <div className="chip__spacer" />
    </div>
  );
};
