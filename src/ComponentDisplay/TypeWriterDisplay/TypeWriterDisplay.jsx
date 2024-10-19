import { useState } from "react";
import TypeWriter from "../../Components/TypeWriter/TypeWriter";
import {
  DocTemplate,
  DocComponentDisplay,
  DocComponentDocumentation,
  DocHeader,
} from "../DocTemplate";
import TypeWriterDoc from "./TypeWriterDoc";
import "./TypeWriterDisplay.css";
const TypeWriterDisplay = ({ isOpen = false, isClosed = () => {} }) => {
  const [isDisplay, setIsDisplay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
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
      <DocTemplate isOpen={isOpen}>
        <DocHeader title="3D Card" onClick={() => isClosed()} />
        <DocComponentDisplay className="hover-card-doc-dis">
          <TypeWriterDisplay />
        </DocComponentDisplay>
        <DocComponentDocumentation>
          <TypeWriterDoc />
        </DocComponentDocumentation>
      </DocTemplate>
    </>
  );
};

export default TypeWriterDisplay;
