import { Children } from "react";
import Modal from "../Components/Modal/Modal";
import Button from "../Components/Button/Button";
const DocTemplate = ({ isOpen, children }) => {
  return (
    <Modal isOpen={isOpen}>
      <section className="component-doc">
        {Children.map(children, (child) => {
          return child;
        })}
      </section>
    </Modal>
  );
};

const DocHeader = ({ title = "", onClick = () => {} }) => {
  return (
    <h3>
      {title}
      <Button onClick={() => onClick()} style={{ fontSize: "1.2rem" }}>
        &#x2716;
      </Button>
    </h3>
  );
};

const DocComponentDisplay = ({ children, className = "", style = {} }) => {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};

const DocComponentDocumentation = ({
  children,
  className = "",
  style = {},
}) => {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};
export {
  DocTemplate,
  DocComponentDisplay,
  DocComponentDocumentation,
  DocHeader,
};
