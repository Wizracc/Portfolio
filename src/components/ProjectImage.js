import React, { Component } from "react";

export default class ProjectImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      image: this.props.image,
      x: 0,
      y: 1000,
    };
    this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
  }

  mouseOver(e) {
    let x = e.pageX;
    let y = e.pageY;
    this.setState({ ...this.state, x: x, y: y, hover: true });
  }
  mouseOut() {
    this.setState({ ...this.state, hover: false });
  }

  render() {
    return (
      <div>
        <p style={{ zIndex: 1 }}>
          <span
            style={{ zIndex: 1 }}
            onMouseOver={this.mouseOver}
            onMouseOut={this.mouseOut}
          >
            hover to view sample
          </span>
        </p>
        {this.state.hover ? (
          <img
            alt="sample"
            style={{
              overflow: "hidden",
              position: "absolute",
              left: this.state.x,
              top: this.state.y + 20,
              transition: "left 1s, opacity 1s",
              zIndex: 2,
            }}
            src={this.state.image}
          />
        ) : (
          <img
            alt="sample"
            style={{
              overflow: "hidden",
              position: "absolute",
              left: -500,
              top: this.state.y + 20,
              transition: "left 1s, opacity 1s",
              opacity: 0,
              zIndex: 0,
            }}
            src={this.state.image}
          />
        )}
      </div>
    );
  }
}
