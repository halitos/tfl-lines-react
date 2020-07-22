import React, { useState, useEffect } from "react";

const ModeSelector = ({ handleSelectedMode }) => {
  const [mode, setMode] = useState([]);

  useEffect(() => {
    fetch("https://api.tfl.gov.uk/Line/Meta/Modes")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMode(data);
      });
  }, []);

  function handleChange(event) {
    if (event.target.value) {
      handleSelectedMode(event.target.value);
    }
  }

  return (
    <>
      <select onChange={handleChange}>
        <option>Chose a Transport Mode</option>
        {mode.map((m, index) => {
          if (m.isTflService) {
            return (
              <option key={index} value={m.modeName}>
                {m.modeName}
              </option>
            );
          }
        })}
      </select>
    </>
  );
};

export default ModeSelector;
