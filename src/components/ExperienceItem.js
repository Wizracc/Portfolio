import React, { Component } from "react";

export default class ExperienceItem extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.data[0]}</h4>
        <h5>{this.props.data[1]}</h5>
        <ul>
          {this.props.data[2].map(item => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}
