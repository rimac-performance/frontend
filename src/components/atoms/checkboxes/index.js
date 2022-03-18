import "./checkboxes.css";

export const CheckBox = ({ text, onChange, name }) => {
  return (
    <div className="checkbox">
      <p>{text}</p>
      <label>
        <div className="checkbox__spacer" />
        <input
          name={name}
          onChange={onChange}
          value={text}
          className="checkbox__default"
          type="checkbox"
        />
        <div className="checkbox__spacer" />
      </label>
    </div>
  );
};
