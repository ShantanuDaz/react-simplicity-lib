import "./Display.css";
import HoverCardDisplay from "./CardDisplay/HoverCardDisplay";
import ToggleDisplay from "./ToggleDisplay/ToggleDisplay";
import TypeWriterDisplay from "./TypeWriterDisplay/TypeWriterDisplay";
import ModalDisplay from "./ModalDisplay/ModalDisplay";
import { useState } from "react";
const Components = [
  {
    title: "Toggle",
    Component: ToggleDisplay,
  },
  {
    title: "3D Card",
    Component: HoverCardDisplay,
  },
  {
    title: "Type Writer",
    Component: TypeWriterDisplay,
  },
  // {
  //   title: "Modal",
  //   Component: ModalDisplay,
  // },
];
const DisplayComponents = () => {
  const [isOpen, setIsOpen] = useState("");
  return (
    <>
      {Components.map(({ Component, title }, index) => {
        return (
          <section className="component-warper" key={index}>
            <h3 onClick={() => setIsOpen(title)}>{title}</h3>
            <div>
              <Component
                isOpen={isOpen === title}
                isClosed={() => setIsOpen("")}
              />
            </div>
          </section>
        );
      })}
    </>
  );
};

export default DisplayComponents;
