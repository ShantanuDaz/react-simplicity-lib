import React from "react";
import DisplayComponents from "./ComponentDisplay/index";
import Welcome from "./Welcome";
import Header from "./Header";
const App = () => {
  return (
    <>
      <Header />
      <main>
        <Welcome />
        <DisplayComponents />
      </main>
    </>
  );
};

export default App;
