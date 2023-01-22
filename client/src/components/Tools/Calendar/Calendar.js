import React from "react";
import { Calendar } from "react-calendar";

export default function Calendar() {
  return (
    <div className="calendar">
      <h1 className="calendarHeader">Aura Travel Calendar</h1>
      <div className="calendarContainer">
        <Calendar className="calendarComps" onChange={setDate} value={date} />
      </div>
      <div className="textCenter">Selected date: {date.toDateString()}</div>
    </div>
  );
}
