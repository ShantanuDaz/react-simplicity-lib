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
    for (let i = 0; i <= 3; i++) {
      if (toggleStates[i].state === false) {
        setTimeout(() => {
          if (i === 3) {
            setToggleStates((prev) => {
              let temp = [...prev];
              temp[i].state = true;
              temp[0].state = false;
              return temp;
            });
          } else {
            setToggleStates((prev) => {
              let temp = [...prev];
              temp[i].state = true;
              temp[i + 1].state = false;
              return temp;
            });
          }
        }, 1000);

        break;
      }
    }
  }, [toggleStates]);

  return (
    <section id="toggle-displayName">
      {toggleStates.map(({ state, ballColorOn }, index) => {
        return (
          <Toggle key={index} ballColorOn={ballColorOn} toggleState={state} />
        );
      })}
    </section>
  );
};

export default ToggleDisplay;
