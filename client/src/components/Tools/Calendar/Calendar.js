import React, { useState } from "react";
import { Calendar } from "react-calendar";
import "../../../styles/Calendar.css";
import Time from "./Time";

export default function AuraCalendar() {
  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false);

  return (
    <div className="auraCalendar">
      <h1 className="text-center">Aura Travel Calendar</h1>
      <div className="calendar-container">
        <Calendar
          onChange={setDate}
          value={date}
          selectRange={true}
          onClickDay={() => setShowTime(true)}
        />
      </div>
      {date.length > 0 ? (
        <p className="text-center selectedDate">
          <span className="bold">Start:</span> {date[0].toDateString()}
          &nbsp;|&nbsp;
          <span className="bold">End:</span> {date[1].toDateString()}
        </p>
      ) : (
        <p className="text-center selectedDate">
          <span className="bold">Selected Date:</span> {date.toDateString()}
        </p>
      )}
      <Time showTime={showTime} date={date} />
    </div>
  );
}
