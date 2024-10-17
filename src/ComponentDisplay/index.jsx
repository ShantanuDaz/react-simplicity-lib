import "./Display.css";
import HoverCardDisplay from "./CardDisplay/HoverCardDisplay";
import ToggleDisplay from "./ToggleDisplay/ToggleDisplay";

const Components = [
  {
    title: "Toggle",
    Component: ToggleDisplay,
  },
  {
    title: "Hover Card",
    Component: HoverCardDisplay,
  },
];
const DisplayComponents = () => {
  return (
    <>
      {Components.map(({ Component, title }, index) => {
        return (
          <section className="component-warper">
            <h3>{title}</h3>
            <div>
              <Component />
            </div>
          </section>
        );
      })}
    </>
  );
};

export default DisplayComponents;
