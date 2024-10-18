import { useState } from "react";
import TypeWriter from "./Components/TypeWriter/TypeWriter";
import Button from "./Components/Button/Button";
const installCode = `npm i react-simplicity`;
const Welcome = () => {
  const [isCompleteHeading, setIsCompleteHeading] = useState(false);
  const [isCompleteMessage, setIsCompleteMessage] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(installCode);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };
  return (
    <section id="welcome-section">
      <p>
        <TypeWriter
          text="<Hi Developers/>"
          onEffectComplete={() => setIsCompleteHeading(true)}
        />
      </p>
      <p>
        <TypeWriter
          text="I have created this library to help you guys to create UI with simple and
        minimalistic code."
          baseSpeed={200}
          onEffectComplete={() => setIsCompleteMessage(true)}
        />
      </p>
      {isCompleteHeading && isCompleteMessage && (
        <>
          <div id="install-message">
            <p>To get started please install it in your react app</p>
            <code>
              {installCode}
              <Button onClick={() => handleCopy()}>
                {isCopied ? "Copied!" : "Copy"}
              </Button>
            </code>
          </div>
        </>
      )}
    </section>
  );
};

export default Welcome;
