import React from "react";
import "../../styles/Tools.css";
// import ToolNavigation from "./CurrentTool";

import Calculator from "../../components/Tools/Calculator/Calculator";


function Tools(handlePageChange) {
  return (
    <section className="mainContainer">
      <div className="toolContainer">
          <div className="weather">
            <div className="widgetContainer">
              <span onClick={() => handlePageChange("Weather")}>Weather</span>
            </div>
          </div>
          <div className="calculator">
            <div className="widgetContainer">
              <span>Calculator</span>
            </div>
          </div>
          <div className="navigation">
            <div className="widgetContainer">
              <span onClick={() => handlePageChange("Navigation")}>Navigation</span>
            </div>
          </div>
          {/* <div className="translator">
            <div className="widgetContainer">
              <span>Translator</span>
            </div>
          </div> */}
        <Calculator /> 
      </div>
    </section>
  );
}
export default Tools;
