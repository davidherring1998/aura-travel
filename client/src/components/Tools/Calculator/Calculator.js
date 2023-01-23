import React from "react";
import CalcButton from "./CalcButton";
import CalcOutputScreen from "./CalcOutputScreen";
import "../../../styles/Calculator.css";

class Calculator extends React.Component {
  constructor() {
    super();

    this.state = {
      question: "",
      answer: "",
    };

    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div className="calculatorContainer">
        <h1>Calculator</h1>
        <div className="calcBox">
          <CalcOutputScreen
            answer={this.state.answer}
            question={this.state.question}
          />
          <div className="buttonRow">
            <CalcButton label={"Clear"} handleClick={this.handleClick} />
            <CalcButton label={"Delete"} handleClick={this.handleClick} />
            <CalcButton label={"."} handleClick={this.handleClick} />
            <CalcButton label={"/"} handleClick={this.handleClick} />
          </div>
          <div className="buttonRow">
            <CalcButton label={"7"} handleClick={this.handleClick} />
            <CalcButton label={"8"} handleClick={this.handleClick} />
            <CalcButton label={"9"} handleClick={this.handleClick} />
            <CalcButton label={"*"} handleClick={this.handleClick} />
          </div>
          <div className="buttonRow">
            <CalcButton label={"4"} handleClick={this.handleClick} />
            <CalcButton label={"5"} handleClick={this.handleClick} />
            <CalcButton label={"6"} handleClick={this.handleClick} />
            <CalcButton label={"-"} handleClick={this.handleClick} />
          </div>
          <div className="buttonRow">
            <CalcButton label={"1"} handleClick={this.handleClick} />
            <CalcButton label={"2"} handleClick={this.handleClick} />
            <CalcButton label={"3"} handleClick={this.handleClick} />
            <CalcButton label={"+"} handleClick={this.handleClick} />
          </div>
          <div className="buttonRow">
            <CalcButton label={"0"} handleClick={this.handleClick} />
            <CalcButton label={"="} handleClick={this.handleClick} />
            <button className="emptyBox">Calculator</button>
          </div>
        </div>
      </div>
    );
  }

  handleClick(event) {
    const value = event.target.value;

    switch (value) {
      case "=": {
        if (this.state.question !== "") {
          var ans = "";
          try {
            ans = eval(this.state.question);
          } catch (err) {
            this.setState({ answer: "Math Error" });
          }
          if (ans === undefined) this.setState({ answer: "Math Error" });
          else this.setState({ answer: ans, question: "" });
          break;
        }
      }
      case "Clear": {
        this.setState({ question: "", answer: "" });
        break;
      }

      case "Delete": {
        var str = this.state.question;
        str = str.substr(0, str.length - 1);
        this.setState({ question: str });
        break;
      }

      default: {
        this.setState({ question: (this.state.question += value) });
        break;
      }
    }
  }
}

export default Calculator;
