import React from "react";
import "./Button.css"; // Import the CSS file for styles

const Button = ({
  children,
  onClick,
  color = "white",
  style = {},
  className = "",
}) => {
  return (
    <button
      className={`animated-button ${className}`}
      onClick={onClick}
      style={{ "--color": color, ...style }}
    >
      {children}
    </button>
  );
};

export default Button;
