import HoverCard from "../../Components/HoverCard/HoverCard";
import {
  DocTemplate,
  DocComponentDisplay,
  DocComponentDocumentation,
  DocHeader,
} from "../DocTemplate";
import HoverCardDoc from "./HoverCardDoc";
import "./HoverCardDisplay.css";
const HoverCardDisplay = ({ isOpen = false, isClosed = () => {} }) => {
  return (
    <>
      <HoverCard>
        <div className="card1">Hover over MEOW!!</div>
      </HoverCard>
      <DocTemplate isOpen={isOpen}>
        <DocHeader title="3D Card" onClick={() => isClosed()} />
        <DocComponentDisplay className="hover-card-doc-dis">
          <HoverCard>
            <div className="card1" style={{ height: "70vh", color: "black" }}>
              Hover over MEOW!!
            </div>
          </HoverCard>
        </DocComponentDisplay>
        <DocComponentDocumentation>
          <HoverCardDoc />
        </DocComponentDocumentation>
      </DocTemplate>
    </>
  );
};

export default HoverCardDisplay;
