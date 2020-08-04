import React, { useState, useEffect } from "react";

const ModeSelector = ({ handleSelectedMode }) => {
  const [mode, setMode] = useState([]);

  useEffect(() => {
    if (!mode) return;
    fetch("https://api.tfl.gov.uk/Line/Meta/Modes")
      .then((res) => res.json())
      .then((data) => setMode(data));
  }, []);

  function handleChange(event) {
    if (event.target.value) {
      handleSelectedMode(event.target.value);
    }
  }

  return (
    <div className="container">
      <select className="selector" onChange={handleChange}>
        <option>Chose a Transport Mode</option>
        {mode.map((m, index) => {
          return (
            <option key={index} value={m.modeName}>
              {m.modeName}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default ModeSelector;
