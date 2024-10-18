import "./Modal.css";
const Modal = ({
  children,
  isOpen,
  isCenter = true,
  onModalClose = () => {},
  className = "",
  style = {},
}) => {
  return (
    <div
      className={`Modal ${isCenter ? "modal-center" : ""} ${className}`}
      style={{ ...style, display: getDisplay(isOpen, isCenter) }}
      onClick={(e) => e.target.classList[0] === "Modal" && onModalClose()}
    >
      {isOpen && children}
    </div>
  );
};

export default Modal;

const getDisplay = (isOpen, isCenter) => {
  if (!isOpen) return "none";
  if (isOpen && isCenter) return "grid";
  return "block";
};
