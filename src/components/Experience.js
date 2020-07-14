import React, { Component } from "react";
import ExperienceItem from "./ExperienceItem";
import "../styles/experience.css";

export default class Experience extends Component {
  render() {
    var experience = [
      [
        "Bachelor's Degree at University of Nebraska Omaha",
        "Aug. 2016 - Dec. 2019, Omaha NE", 
        [
          "Graduated cum laude",
          "Focused in web development and software engineering",
          "Explored many topics including data science, statistics, natural language processing, algorithms, and data structures",
        ],
      ],
      [
        "Web Developer and Designer, decks.wizra.cc",
        "Jan. 2020 - Present, Bellevue NE",
        [
          "Developed and maintain a simple, minimalistic companion website for the online trading card game Legends of Runeterra",
          "Displays interactive information page for a deck from a given deck-code string",
          "Created in React.js, Node.js, Express.js, HTML/JS/CSS. Hosted using AWS, Elastic Beanstalk",
          "Sole developer, designer, and maintainer.",
        ],
      ],
      [
        "Full-Stack Web Developer, UNO AAC",
        "Aug. 2019 - Dec 2019, Omaha NE",
        [
          "Translated existing Academic Assessment process into a web application",
          "Created with Django, Python, PostgreSQL, HTML/JS/CSS",
          "Managed communications with client, University of Omaha Nebraska's Academic Assessment Community",
          "Developed REST API, Relational Database, Multi-page forms and processes",
          "Worked in small agile team with shared responsibilities",
        ],
      ],
      [
        "Full-Stack Web Developer, Pantry Raid UNO",
        "May 2019 - Aug. 2019, Omaha NE",
        [
          "Solved unique problem of matching pantry ingredients to possible recipes",
          "Created with Flask, Python, MongoDB, Bulma, HTML/JS/CSS",
          "Developed an application to grab recipes from open web sources and translate them into usable data",
          "Developed recipe pages with options to scale portion sizes",
          "Worked in a small agile team with shared responsibilities",
        ],
      ],
    ];
    return (
      <div className="experience">
        <div className="exp-content">
          <ExperienceItem data={experience[0]} />
          <ExperienceItem data={experience[1]} />
          <ExperienceItem data={experience[2]} />
          <ExperienceItem data={experience[3]} />
        </div>
        <div className="exp-title">
          <h2>Experience</h2>
        </div>
      </div>
    );
  }
}
