import React from "react";
import "../../styles/Tools.css";
// import ToolNavigation from "./CurrentTool";

import Calculator from "../../components/Tools/Calculator/Calculator";
import Calender from "../../components/Tools/Calendar/Calendar";
import Maps from "../../components/Tools/Maps/Maps";
import WeatherCard from "../../components/Tools/Weather/Weather";


function Tools(handlePageChange) {
  return (
    <section className="mainContainer">
      <div className="toolContainer">
          {/* <div className="weather">
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
          <div className="calender">
            <div className="widgetContainer">
              <span>Calender</span>
            </div>
          </div> */}
        <Calculator /> 
        <Calender />
        <Maps />
        <WeatherCard />
      </div>
    </section>
  );
}
export default Tools;
