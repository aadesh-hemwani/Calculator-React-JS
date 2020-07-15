import React, { Component } from "react";
import Button from "./components/Button.js";

export default class Controls extends Component {
  render() {
    return (
      <div className="col btnBlock">
        <div className="row">
          <Button btnValue="C" name="C" click={this.props.btnClick} />
          <Button btnValue="(" name="(" click={this.props.btnClick} />
          <Button btnValue=")" name=")" click={this.props.btnClick} />
          <Button btnValue="&#8592;" name="bs" click={this.props.btnClick} />
        </div>
        <div className="row">
          <Button btnValue="7" name="7" click={this.props.btnClick} />
          <Button btnValue="8" name="8" click={this.props.btnClick} />
          <Button btnValue="9" name="9" click={this.props.btnClick} />
          <Button btnValue="&#xF7;" name="/" click={this.props.btnClick} />
        </div>
        <div className="row">
          <Button btnValue="4" name="4" click={this.props.btnClick} />
          <Button btnValue="5" name="5" click={this.props.btnClick} />
          <Button btnValue="6" name="6" click={this.props.btnClick} />
          <Button btnValue="&#215;" name="*" click={this.props.btnClick} />
        </div>
        <div className="row">
          <Button btnValue="1" name="1" click={this.props.btnClick} />
          <Button btnValue="2" name="2" click={this.props.btnClick} />
          <Button btnValue="3" name="3" click={this.props.btnClick} />
          <Button btnValue="&#x2212;" name="-" click={this.props.btnClick} />
        </div>
        <div className="row">
          <Button btnValue="." name="." click={this.props.btnClick} />
          <Button btnValue="0" name="0" click={this.props.btnClick} />
          <Button btnValue="=" name="=" click={this.props.btnClick} />
          <Button btnValue="+" name="+" click={this.props.btnClick} />
        </div>
      </div>
    );
  }
}
