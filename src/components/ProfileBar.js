import React, { Component } from "react";
import profilePic from "../images/face pic.png";
import "../styles/profileBar.css";

export default class ProfileBar extends Component {
  render() {
    return (
      <div className="profileBar">
        <img className="pic" src={profilePic} alt="Devilishly Handsome"></img>
        <h3 className="profileLabel">That's me!</h3>
      </div>
    );
  }
}
