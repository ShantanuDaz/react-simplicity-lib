import React from "react";
import "./Button.css"; // Import the CSS file for styles

const Button = ({
  children,
  onClick,
  buttonColor = "lightblue",
  style = {},
  className = "",
}) => {
  return (
    <button
      className={`animated-button ${className}`}
      onClick={onClick}
      style={{ "--color": buttonColor, ...style }}
    >
      {children}
    </button>
  );
};

export default Button;
