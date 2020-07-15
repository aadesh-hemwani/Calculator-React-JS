import React, { Component } from "react";
import "./App.css";
import Controls from "./Controls.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      result: "",
    };
  }
  onClick = (button) => {
    switch (button) {
      case "=":
        this.calculate();
        break;
      case "C":
        this.clearScreen();
        break;
      case "bs":
        this.setState({
          result: this.state.result.slice(0, -1),
        });
        break;
      default:
        this.setState({
          result: this.state.result + button,
        });
        break;
    }
  };

  clearScreen() {
    this.setState({
      result: "",
    });
  }
  calculate() {
    try {
      this.setState({
        result: eval(this.state.result) + "",
      });
    } catch (error) {
      this.setState({
        result: "error",
      });
    }
  }

  render() {
    return (
      <div className="App">
        <div className="calculator">
          <div className="row-4">
            <div className="display">{this.state.result}</div>
          </div>
          <div className="row-8">
            <Controls btnClick={this.onClick} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
