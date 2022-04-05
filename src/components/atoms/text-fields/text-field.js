import "./style.css";

const TextField = ({
  width,
  onChange,
  error,
  placeholder,
  type,
  value,
  onBlur,
}) => {
  return (
    <input
      defaultValue={value}
      style={{ width: width ? width : "" }}
      className={error ? "errorTextField" : "textField"}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      type={type ? type : "text"}
    />
  );
};

export default TextField;
