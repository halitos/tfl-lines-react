import React, { useState } from "react";
import "./App.css";
import ModeSelector from "./ModeSelector";
import TransportSelector from "./TransportSelector";

function App() {
  const [mode, setMode] = useState();
  const [transport, setTransport] = useState();

  function handleSelectedMode(selectedMode) {
    setMode(selectedMode);
  }

  function handleSelectedTransport(selectedTransport) {
    setTransport(selectedTransport);
  }
  return (
    <>
      <div className="header">
        <h1>Transport for London Information</h1>
      </div>
      <div className="container">
        <ModeSelector handleSelectedMode={handleSelectedMode} />
        <h4>You selected: {mode}</h4>
        <TransportSelector
          mode={mode}
          handleSelectedTransport={handleSelectedTransport}
        />
        <h4>You selected: {transport}</h4>
      </div>
    </>
  );
}

export default App;
