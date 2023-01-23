import React from "react";

const CalcOutput = (props) => {
  return (
    <div className="outputBox">
        <input className="outputRow" type="text" readOnly value={props.value} />
      </div>
  );
};

export default CalcOutput;
