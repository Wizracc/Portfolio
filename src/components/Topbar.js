import React, { Component } from "react";
import "../styles/topbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default class Topbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const visible = currentScrollPos >= window.innerHeight;

    this.setState({
      visible,
    });
  };

  render() {
    return (
      <div className={this.state.visible ? "topbar" : "topbar hidden"}>
        <p>
          <AnchorLink href="#landing">Home</AnchorLink> |{" "}
          <AnchorLink href="#about">About</AnchorLink> |{" "}
          <AnchorLink href="#experience">Experience</AnchorLink> |{" "}
          <AnchorLink href="#projects">Projects</AnchorLink> |{" "}
          <AnchorLink href="#skills">Skills</AnchorLink> |{" "}
          <AnchorLink href="#contact">Contact</AnchorLink>
        </p>
      </div>
    );
  }
}
