import React from "react";

const CalcButton = (props) => {
  return (
    <input className="calcBTN" type="button" value={props.label} onClick={props.handleClick} />
  );
};

export default CalcButton;
