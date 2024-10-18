import { Tabs, Tab } from "../../Components/Tabs/Tabs";
import Button from "../../Components/Button/Button";
import Table from "../../Components/Table/Table";
import { useState } from "react";
const codeSample = `import React, { useState } from "react";
import Toggle from "./Toggle";

function App() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = (newState) => {
    console.log("New Toggle State:", newState);
    setIsToggled(newState);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Toggle Component Demo</h1>
      <Toggle
        toggleState={isToggled}
        onChangeToggleState={handleToggle}
        labelOn="Enabled"
        labelOff="Disabled"
        ballSize={30}
        backgroundColorOn="#4caf50"
        backgroundColorOff="#f44336"
        ballColorOn="white"
        ballColorOff="black"
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
    name: "toggleState",
    defaultValue: "undefined",
    values: "true | false | undefined",
    function:
      "Controls the toggle state externally. If undefined, the component uses internal state.",
  },
  {
    name: "onChangeToggleState",
    defaultValue: "undefined",
    values: ["Function", "undefined"],
    function:
      "Callback triggered when the toggle state changes (only when toggleState is provided).",
  },
  {
    name: "labelOn",
    defaultValue: '"On"',
    values: ["String"],
    function: "Label displayed when the toggle is in the 'on' state.",
  },
  {
    name: "labelOff",
    defaultValue: '"Off"',
    values: ["String"],
    function: "Label displayed when the toggle is in the 'off' state.",
  },
  {
    name: "ballSize",
    defaultValue: 24,
    values: ["Number"],
    function: "Specifies the diameter of the toggle's ball (in pixels).",
  },
  {
    name: "transitionDuration",
    defaultValue: '"300ms"',
    values: ["String (CSS duration)"],
    function: "Duration of the transition animation.",
  },
  {
    name: "backgroundColorOn",
    defaultValue: '"white"',
    values: ["CSS Color"],
    function: "Background color when the toggle is in the 'on' state.",
  },
  {
    name: "backgroundColorOff",
    defaultValue: '"lightgray"',
    values: ["CSS Color"],
    function: "Background color when the toggle is in the 'off' state.",
  },
  {
    name: "ballColorOn",
    defaultValue: '"#348dfa"',
    values: ["CSS Color"],
    function: "Color of the ball in the 'on' state.",
  },
  {
    name: "ballColorOff",
    defaultValue: '"grey"',
    values: ["CSS Color"],
    function: "Color of the ball in the 'off' state.",
  },
  {
    name: "style",
    defaultValue: "{}",
    values: ["CSS Object"],
    function: "Applies additional inline styles to the component.",
  },
  {
    name: "className",
    defaultValue: '""',
    values: ["String (CSS class)"],
    function: "Applies custom CSS class names.",
  },
];

const ToggleDoc = () => {
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
          The Toggle component is a customizable toggle switch for React
          applications. It can be used to represent binary states such as
          on/off, true/false, or enabled/disabled. You can control it externally
          using props or let it manage its state internally.
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

export default ToggleDoc;
