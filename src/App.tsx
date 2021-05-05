import React from "react";
import Keyboard from "./components/keyboard/Keyboard";
import TouchDetector from "./components/TouchDetector";
import logo from "./logo.svg";

function App() {
  return (
    <div style={{ position: "relative" }}>
      <div>haha</div>
      {/* <TouchDetector width="300px" height="3000px" /> */}
      <Keyboard />
    </div>
  );
}

export default App;
