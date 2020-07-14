import React, { Component } from "react";
import "../styles/landing.css";
import ArrowDropDownCircleTwoToneIcon from "@material-ui/icons/ArrowDropDownCircleTwoTone";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <h1 className="bigName">David Ream</h1>
        <h2>The "Wizracc"</h2>
        <p className="landingBlurb">
          I'm an Omaha based Software Developer looking to find my way in the
          world and start up my career as a professional Software Engineer.
          Whether it's front-end, back-end, full-stack, or any other form of
          software engineering, I'm up to the task! Detail-oriented to a fault,
          and always hungry for more knowledge, I love working with new tools
          and technologies to solve problems and explore data.
        </p>
        <p className="artCredit">
          Art by <a href="https://www.artstation.com/aenamiart">Alena Aenami</a>
        </p>
        <AnchorLink href="#about">
          <i className="arrow">
            <ArrowDropDownCircleTwoToneIcon style={{ fontSize: 60 }} />
          </i>
        </AnchorLink>
      </div>
    );
  }
}
