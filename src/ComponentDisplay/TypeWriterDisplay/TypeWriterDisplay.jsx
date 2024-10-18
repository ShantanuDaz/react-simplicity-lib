import { useState } from "react";
import TypeWriter from "../../Components/TypeWriter/TypeWriter";
import "./TypeWriterDisplay.css";
const TypeWriterDisplay = () => {
  const [isDisplay, setIsDisplay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="type-writer-display"
      onMouseEnter={() => {
        setIsDisplay(false);
      }}
      onMouseLeave={() => {
        setIsDisplay(true);
        setIsHovered(true);
      }}
    >
      {isHovered ? (
        <TypeWriter
          text="I told you not to but 😔 well alright I will tell you again"
          onEffectComplete={() =>
            setTimeout(() => {
              setIsHovered(false);
            }, 2000)
          }
        />
      ) : (
        isDisplay && (
          <TypeWriter text="Hi I'm Shantanu and this is not your avg typewriter effect it's elegant just don't hover over it" />
        )
      )}
    </div>
  );
};

export default TypeWriterDisplay;
