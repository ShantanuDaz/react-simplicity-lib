import React, { useState } from "react";
import "./Toggle.css";
const Toggle = ({ labelOn = "On", labelOff = "Off" }) => {
  const [isOn, setIsOn] = useState(false);
  return (
    <div className="toggle">
      <div
        className="toggle-area"
        style={{ justifyContent: isOn ? "flex-end" : "flex-start" }}
        onClick={() => setIsOn(!isOn)}
      >
        <div className="toggle-ball"></div>
      </div>
      <p className="toggle-label">{isOn ? labelOn : labelOff}</p>
    </div>
  );
};

export default Toggle;
