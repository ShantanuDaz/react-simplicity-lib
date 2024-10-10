import React, { useEffect, useState } from "react";
import "./Toggle.css";
const Toggle = ({
  toggleState = undefined,
  onChangeToggleState,
  labelOn = "On",
  labelOff = "Off",
  ballSize = 24,
  transitionDuration = "300ms",
  backgroundColorOn = "white",
  backgroundColorOff = "lightgray",
  ballColorOn = "#348dfa",
  ballColorOff = "grey",
}) => {
  const [isOn, setIsOn] = useState(toggleState);
  useEffect(() => {
    if (toggleState !== undefined) setIsOn(toggleState);
  }, [toggleState]);

  const handleState = () => {
    if (toggleState !== undefined)
      onChangeToggleState && onChangeToggleState(!isOn);
    else setIsOn(!isOn);
  };
  return (
    <div className="toggle" style={{ "--ballSize": `${ballSize}px` }}>
      <div
        className="toggle-area"
        onClick={() => handleState()}
        style={{
          backgroundColor: isOn ? backgroundColorOn : backgroundColorOff,
          border: `.5px solid ${backgroundColorOff}`,
          boxShadow: isOn ? `0 0 2px ${ballColorOn}` : "none",
          transitionDuration,
        }}
      >
        <div
          className="toggle-ball-container"
          style={{ width: isOn ? ballSize : ballSize * 2, transitionDuration }}
        >
          <div
            className="toggle-ball"
            style={{ backgroundColor: isOn ? ballColorOn : ballColorOff }}
          ></div>
        </div>
      </div>
      <p className="toggle-label">{isOn ? labelOn : labelOff}</p>
    </div>
  );
};

export default Toggle;
