export const Dialog = ({
  message,
  acceptText,
  closeText,
  onAccept,
  onClose,
}) => {
  return (
    <div className="dialog__background">
      <div className="dialog__body">
        <div className="dialog__message">
          <p>{message}</p>
        </div>
        <div className="dialog__buttons">
          <div className="dialog__close" onClick={onClose}>
            <p>{closeText}</p>
          </div>
          <div className="dialog__accept" onClick={onAccept}>
            <p>{acceptText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
