import React, { Component } from "react";
import ExperienceItem from "./ExperienceItem";
import ProjectImage from "./ProjectImage";
import "../styles/projects.css";
import clumpSample from "../images/clump sample.png";
import poloSample from "../images/polo sample.png";
import grynnSample from "../images/grynn sample.png";

export default class Projects extends Component {
  render() {
    var data = [
      [
        "GrynnBot",
        "Developer",
        [
          "Discord chat utility for Twitch.TV streamers",
          "Provides online notifications to Discord chat rooms when streamers go online or offline",
          "Python, AsyncIO, Discord.py",
        ],
      ],
      [
        "Aqua's Polo Shirt",
        "Developer",
        [
          "Discord chat utility for AquaDragon33's Discord server",
          "Monitored chat messages for custom emoji usage and provided basic analytics",
          "Removed underused custom emoji to clear up space for user-submitted emoji",
          "Python, AsyncIO, Discord.py, MySQL",
        ],
      ],
      [
        "Clump of Whumps",
        "Developer",
        [
          "Discord chat utility for Legends of Runeterra players",
          "Provides translation of deck code strings into human-readable decks",
          "Provides card lookup functionality",
          "Displays card information and art",
          "Node.js, Javascript, Discord.js",
        ],
      ],
    ];
    return (
      <div className="projects">
        <div className="proj-title">
          <h2>Projects</h2>
        </div>
        <div className="proj-content">
          <ExperienceItem data={data[0]} />
          <ProjectImage image={grynnSample} />
          <ExperienceItem data={data[1]} />
          <ProjectImage image={poloSample} />
          <ExperienceItem data={data[2]} />
          <ProjectImage image={clumpSample} />
        </div>
      </div>
    );
  }
}
