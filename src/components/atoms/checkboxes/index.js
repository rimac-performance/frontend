export const CheckBox = ({ text }) => {
  return (
    <div className="checkbox">
      <label>
        <input type="checkbox" />
        {text}
      </label>
    </div>
  );
};
