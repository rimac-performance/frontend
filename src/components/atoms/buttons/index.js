export const PrimaryButton = ({ text }) => {
  const onClick = () => {
    return;
  };

  return (
    <div className="button__primary">
      <label>{text}</label>
    </div>
  );
};

export const SecondaryButton = ({ text }) => {
  const onClick = () => {
    return;
  };

  return (
    <div className="button__secondary">
      <label>{text}</label>
    </div>
  );
};

export const RunButton = ({ text }) => {
  const onClick = () => {
    return;
  };

  return (
    <div className="button__run">
      <label>{text}</label>
    </div>
  );
};

export const ImageButton = ({ text, img }) => {
  const onClick = () => {
    return;
  };

  return (
    <div className="button__image">
      <img src={img} alt="" />
      <label>{text}</label>
    </div>
  );
};
