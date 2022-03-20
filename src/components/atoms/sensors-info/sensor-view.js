import "./style.css";

const SensorInfo = ({
  width,
  onChange,
  error,
  placeholder,
  type,
  name,
  text,
  unit,
}) => {
  return (
    <>
      <div className="block">
        <p>{text}</p>
        <div className="input-holder">
          <input
            style={{ width: width ? width : "" }}
            className={error ? "errorTextField" : "textField"}
            placeholder={placeholder}
            onChange={onChange}
            type={type}
            name={name}
          />
          <label>{unit}</label>
        </div>
      </div>
    </>
  );
};

export default SensorInfo;
