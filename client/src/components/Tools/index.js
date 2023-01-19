import React from "react";
import "../../styles/Tools.css";

function Tools() {
  return (
    <div className="toolContainer">
      <div className="weather">
        <div className="widgetContainer">
          <span>Weather</span>
        </div>
      </div>
      <div className="calculator">
        <div className="widgetContainer">
          <span>Calculator</span>
        </div>
      </div>
      <div className="navigation">
        <div className="widgetContainer">
          <span>Navigation</span>
        </div>
      </div>
      <div className="translator">
        <div className="widgetContainer">
          <span>Translator</span>
        </div>
      </div>
    </div>
  );
}
export default Tools;
