import React, { useState, useEffect } from "react";

const LineInfo = () => {
  const [line, setLine] = useState();

  useEffect(() => {
    fetch("https://api.tfl.gov.uk/Line/bakerloo/Route")
      .then((res) => res.json())
      .then((data) => setLine(data.routeSections[0].originationName));
  }, []);

  return <div>{line}</div>;
};

export default LineInfo;
