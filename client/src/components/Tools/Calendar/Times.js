import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "../../../styles/Calendar.css";

const time = [
  "1:00 A.M.",
  "2:00 A.M.",
  "3:00 A.M.",
  "4:00 A.M.",
  "5:00 A.M.",
  "6:00 A.M.",
  "7:00 A.M.",
  "8:00 A.M.",
  "9:00 A.M.",
  "10:00 A.M.",
  "11:00 A.M.",
  "12:00 P.M.",
  "1:00 P.M.",
  "2:00 P.M.",
  "3:00 P.M.",
  "4:00 P.M.",
  "5:00 P.M.",
  "6:00 P.M.",
  "7:00 P.M.",
  "8:00 P.M.",
  "9:00 P.M.",
  "10:00 P.M.",
  "11:00 P.M.",
  "12:00 A.M.",
];

function Times(props) {
  const [event, setEvent] = useState(null);
  const [info, setInfo] = useState(false);

  function displayInfo(e) {
    setInfo(true);
    setEvent(e.target.innerText);
  }

  return (
    <div className="times">
      {time.map((times) => {
        return (
          <div className="timesContainer">
            <button className="timeBox" onClick={(e) => displayInfo(e)}>
              {" "}
              {times}{" "}
            </button>
          </div>
        );
      })}
      <div>
        {info
          ? `Your appointment is set to ${event} ${props.date.toDateString()}`
          : null}
      </div>
    </div>
  );
}

export default Times;
