import React from "react";
import "./index.css";
import syint from "../Assets/syint.png";

const LeftPanel = () => {
  return (
    <div className="left-panel">
      <img src={syint} alt="Logo" className="logo" />
    </div>
  );
};

export default LeftPanel;
