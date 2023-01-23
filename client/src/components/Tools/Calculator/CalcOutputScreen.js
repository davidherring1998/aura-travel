import React from "react";
import CalcOutput from "./CalcOutput";

const CalcOutputScreen = (props) => {
  return (
    <div className="screen">
      <CalcOutput value={props.question} />
      <CalcOutput value={props.answer} />
    </div>
  );
};

export default CalcOutputScreen;
