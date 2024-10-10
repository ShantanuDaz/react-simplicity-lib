import React from "react";
import ToggleDisplay from "./ComponentDisplay/ToggleDisplay/ToggleDisplay";
import Header from "./Header";
const App = () => {
  return (
    <>
      <Header />
      <main>
        <ToggleDisplay />
      </main>
    </>
  );
};

export default App;
