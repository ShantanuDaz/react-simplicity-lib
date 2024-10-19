import { Tabs, Tab } from "../../Components/Tabs/Tabs";
import Button from "../../Components/Button/Button";
import Table from "../../Components/Table/Table";
import { useState } from "react";
const codeSample = `import React from "react";
import TypeWriter from "./TypeWriter";

function App() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>TypeWriter Demo</h1>
      <TypeWriter 
        text="Welcome to the TypeWriter animation!" 
        baseSpeed={1000} 
        onEffectComplete={() => console.log("Typing effect complete!")}
        style={{ fontSize: "24px", color: "blue" }}
      />
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
    name: "text",
    defaultValue: '""',
    values: ["String"],
    function: "The text to display with the typing effect.",
  },
  {
    name: "baseSpeed",
    defaultValue: "500",
    values: ["Number (in ms)"],
    function:
      "Controls the speed of typing, dynamically adjusted based on text length.",
  },
  {
    name: "style",
    defaultValue: "{}",
    values: ["CSS Object"],
    function: "Inline styles applied to the text container.",
  },
  {
    name: "className",
    defaultValue: '""',
    values: ["String"],
    function: "Adds additional CSS class names.",
  },
  {
    name: "onEffectComplete",
    defaultValue: "() => {}",
    values: ["Function"],
    function: "Callback function triggered when typing completes.",
  },
];

const TypeWriterDoc = () => {
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
          The TypeWriter component mimics the typing effect, rendering a string
          character by character. It adjusts typing speed dynamically based on
          the text length and provides a callback function when the effect
          completes. This component can be used for interactive titles or
          text-based animations.
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

export default TypeWriterDoc;
