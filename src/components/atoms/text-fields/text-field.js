import "./style.css";

const TextField = ({ width, onChange, error, placeholder, type, name }) => {
  return (
    <input
      style={{ width: width ? width : "" }}
      className={error ? "errorTextField" : "textField"}
      placeholder={placeholder}
      onChange={onChange}
      type={type}
      name={name}
    />
  );
};

export default TextField;
