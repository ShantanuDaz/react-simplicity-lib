import { useEffect, useState } from "react";
import Toggle from "../../Components/Toggle/Toggle";
import "./ToggleDisplay.css";
const ToggleDisplay = () => {
  const [toggleStates, setToggleStates] = useState([
    { state: false, ballColorOn: "pink" },
    { state: false, ballColorOn: "blue" },
    { state: false, ballColorOn: "violet" },
    { state: false, ballColorOn: "yellow" },
  ]);
  useEffect(() => {
    toggleStates.forEach((toggle, i) => {
      setInterval(() => {
        setToggleStates((prev) => {
          const newToggles = [...prev];
          newToggles[i].state = !newToggles[i].state;
          return newToggles;
        });
      }, 2000 + i * 100);
    });
  }, []);
  return (
    <section id="toggle-displayName">
      <h2>Toggle</h2>
      {toggleStates.map(({ state, ballColorOn }, index) => {
        return (
          <Toggle key={index} ballColorOn={ballColorOn} toggleState={state} />
        );
      })}
    </section>
  );
};

export default ToggleDisplay;
