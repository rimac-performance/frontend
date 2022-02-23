import "./checkboxes.css";

export const CheckBox = ({ text }) => {
  return (
    <div className="checkbox">
      <p>{text}</p>
      <label>
        <div className="checkbox__spacer" />
        <input value={text} className="checkbox__default" type="checkbox" />
        <div className="checkbox__spacer" />
      </label>
    </div>
  );
};
