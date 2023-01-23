import React, { useState } from "react";
import Calendar from "react-calendar";
import "../../../styles/Calendar.css";
import Times from "./Times.js";

function Time(props) {
  return (
    <div>
      {props.showTime ? <Times date={props.date} /> : null}
    </div>
  );
}

export default Time;
