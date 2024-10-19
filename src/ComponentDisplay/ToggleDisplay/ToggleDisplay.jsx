import { useEffect, useState } from "react";
import Toggle from "../../Components/Toggle/Toggle";
import ToggleDoc from "./ToggleDoc";
import "./ToggleDisplay.css";
import {
  DocTemplate,
  DocComponentDisplay,
  DocComponentDocumentation,
  DocHeader,
} from "../DocTemplate";

const ToggleDisplay = ({ isOpen = false, isClosed = () => {} }) => {
  const [toggleStates, setToggleStates] = useState([
    { state: false, ballColorOn: "lightblue" },
    { state: false, ballColorOn: "pink" },
    { state: false, ballColorOn: "#ffe0b2" },
    { state: false, ballColorOn: "#95B697" },
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
      <DocTemplate isOpen={isOpen}>
        <DocHeader title="Toggle" onClick={() => isClosed()} />
        <DocComponentDisplay>
          <Toggle
            ballColorOn="#e57373"
            style={{ margin: "10px auto" }}
            labelOff="Switch Off!"
            labelOn="Switch On💡"
          />
          <ToggleDisplay />
        </DocComponentDisplay>
        <DocComponentDocumentation>
          <ToggleDoc />
        </DocComponentDocumentation>
      </DocTemplate>
    </section>
  );
};

export default ToggleDisplay;
