import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <div className="btn">
        <input
          type="button"
          value={this.props.btnValue}
          className="value"
          name={this.props.name}
          onClick={(e) => this.props.click(e.target.name)}
        />
      </div>
    );
  }
}
export default Button;
