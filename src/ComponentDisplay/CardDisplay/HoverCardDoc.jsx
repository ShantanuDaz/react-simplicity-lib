import { Tabs, Tab } from "../../Components/Tabs/Tabs";
import Button from "../../Components/Button/Button";
import Table from "../../Components/Table/Table";
import { useState } from "react";
const codeSample = `import React from "react";
import HoverCard from "./HoverCard";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "50px" }}>
      <HoverCard style={{ width: "300px", height: "200px", backgroundColor: "#348dfa" }}>
        <h2 style={{ textAlign: "center", color: "white" }}>Hover Me!</h2>
      </HoverCard>
    </div>
  );
}

export default App;
`;
const columns = [
  {
    name: "Prop Name",
    field: "name",
  },
  {
    name: "Default Value",
    field: "defaultValue",
  },
  {
    name: "Allowed Values",
    field: "values",
  },
  {
    name: "Function",
    field: "function",
  },
];

const rows = [
  {
    name: "children",
    defaultValue: "undefined",
    values: ["Any valid React nodes"],
    function: "Content to display inside the hover card.",
  },
  {
    name: "className",
    defaultValue: '""',
    values: ["String"],
    function: "Adds additional CSS classes to the component.",
  },
  {
    name: "style",
    defaultValue: "{}",
    values: ["CSS Object"],
    function: "Adds custom inline styles to the card.",
  },
];

const HoverCardDoc = () => {
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(codeSample);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };
  return (
    <Tabs Tabs={["Overview", "Props"]}>
      <Tab className="doc-tab doc-overview">
        <p>
          The HoverCard is a React component that provides a dynamic hover
          effect on cards. When a user moves their mouse over the card, it
          rotates and scales based on the cursor’s position relative to the
          card, creating a 3D effect. It is useful for adding interactive and
          visually appealing UI elements.
        </p>
        <pre>
          <div>
            <span className="code-title">JSX</span>
            <Button onClick={() => handleCopy()}>
              {isCopied ? "Copied!" : "Copy Code"}
            </Button>
          </div>
          <div>
            <code>{codeSample}</code>
          </div>
        </pre>
      </Tab>
      <Tab className="doc-tab doc-props">
        <Table rows={rows} columns={columns} />
      </Tab>
    </Tabs>
  );
};

export default HoverCardDoc;
