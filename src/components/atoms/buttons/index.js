import "./buttons.css";

export const PrimaryButton = ({ text, onClick }) => {
  return (
    <div className="button__primary" onClick={onClick}>
      <label>{text}</label>
    </div>
  );
};

export const SecondaryButton = ({ text, onClick }) => {
  return (
    <div className="button__secondary" onClick={onClick}>
      <label>{text}</label>
    </div>
  );
};

export const RunButton = ({ text, onClick }) => {
  return (
    <div className="button__run" onClick={onClick}>
      <label>{text}</label>
    </div>
  );
};

export const ImageButton = ({ text, img, onClick }) => {
  return (
    <div className="button__image" onClick={onClick}>
      <img src={img} alt="" />
      <label>{text}</label>
    </div>
  );
};
