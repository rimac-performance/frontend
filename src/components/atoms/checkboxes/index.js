import "./checkboxes.css";

export const CheckBox = ({ name, text, onChange }) => {
  return (
    <div className="checkbox">
      <p>{text}</p>
      <label>
        <div className="checkbox__spacer" />
        <input
          value={text}
          name={name}
          className="checkbox__default"
          type="checkbox"
          onChange={onChange}
        />
        <div className="checkbox__spacer" />
      </label>
    </div>
  );
};
