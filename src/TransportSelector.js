import React, { useState, useEffect } from "react";

const TransportSelector = (props) => {
  const [transport, setTransport] = useState([]);

  useEffect(() => {
    if (!props.mode) return;
    fetch(`https://api.tfl.gov.uk/Line/Mode/${props.mode}`)
      .then((res) => res.json())
      .then((data) => setTransport(data));
  }, [props.mode]);

  function handleChange(event) {
    if (event.target.value) {
      props.handleSelectedTransport(event.target.value);
    }
  }

  return (
    <div className="container">
      <select onChange={handleChange} className="selector">
        <option>Choose a Line...</option>
        {transport.map((tr) => {
          return (
            <option key={tr.id} value={tr.id}>
              {tr.id}
              {console.log(tr.id)}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default TransportSelector;
