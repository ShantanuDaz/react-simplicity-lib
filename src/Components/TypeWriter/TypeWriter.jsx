import { useState, useEffect } from "react";
import "./TypeWriter.css";

const TypeWriter = ({
  text = "",
  baseSpeed = 500, // Base speed for very short texts.
  style = {},
  className = "",
  onEffectComplete = () => {},
}) => {
  const [textCounter, setTextCounter] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);

  // Calculate speed dynamically based on the text length.
  const calculateSpeed = (textLength) => {
    const speed = baseSpeed / Math.log(textLength + 1); // Smooth scaling.
    return Math.max(30, Math.min(speed, 100)); // Clamp between 30ms and 100ms.
  };

  const typingSpeed = calculateSpeed(text.length);

  useEffect(() => {
    let timeout;

    if (typingIndex < text.length) {
      timeout = setTimeout(() => {
        setTextCounter((prev) => prev + text[typingIndex]);
        setTypingIndex((prev) => prev + 1);
      }, typingSpeed);
    } else onEffectComplete();

    return () => clearTimeout(timeout); // Cleanup on unmount or prop change.
  }, [typingIndex, text, typingSpeed]);

  // Reset when the text changes.
  useEffect(() => {
    setTextCounter("");
    setTypingIndex(0);
  }, [text]);

  return (
    <p className={`type-writer ${className}`} style={style}>
      {textCounter}
    </p>
  );
};

export default TypeWriter;
