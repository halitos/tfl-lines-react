import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import ModeSelector from "./ModeSelector";

function App() {
  const [mode, setMode] = useState();

  function handleSelectedMode(selectedMode) {
    setMode(selectedMode);
  }
  return (
    <div className="App">
      <Header />
      <ModeSelector handleSelectedMode={handleSelectedMode} />
      <h3>{mode}</h3>
    </div>
  );
}

export default App;
