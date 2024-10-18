import { useEffect, useState } from "react";
import Toggle from "../../Components/Toggle/Toggle";
import ToggleDoc from "./ToggleDoc";
import "./ToggleDisplay.css";
import Modal from "../../Components/Modal/Modal";
import Button from "../../Components/Button/Button";

const ToggleDisplay = ({ isOpen = false, isClosed = () => {} }) => {
  const [toggleStates, setToggleStates] = useState([
    { state: false, ballColorOn: "pink" },
    { state: false, ballColorOn: "lightblue" },
    { state: false, ballColorOn: "#bc76cb" },
    { state: false, ballColorOn: "#82b091" },
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
  if (isOpen)
    return (
      <Modal isOpen={isOpen}>
        <section className="component-doc">
          <h3>
            Toggle{" "}
            <Button onClick={() => isClosed()} style={{ fontSize: "1.2rem" }}>
              &#x2716;
            </Button>
          </h3>
          <div>
            <div id="toggle-displayName">
              {toggleStates.map(({ state, ballColorOn }, index) => {
                return (
                  <Toggle
                    key={index}
                    ballColorOn={ballColorOn}
                    toggleState={state}
                  />
                );
              })}
            </div>
          </div>
          <div>
            <ToggleDoc />
          </div>
        </section>
      </Modal>
    );
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
