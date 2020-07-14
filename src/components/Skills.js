import React, { Component } from "react";
import SkillItem from "./SkillItem";
import "../styles/skills.css";

export default class Skills extends Component {
  render() {
    var skills = [
      {
        title: "Python, Javascript, React, Node",
        description: "Very Comfortable",
      },
      {
        title: "Java, C, C++, C#, HTML, CSS, Django, SQL",
        description: "Comfortable, room to improve",
      },
      {
        title: "Ruby, Perl, Ruby on Rails, MongoDB",
        description: "Rusty, willing to pick back up",
      },
      {
        title: "Go, R, Prolog, Lisp",
        description: "Brief experience, eager to learn more",
      },
      {
        title: "Soft Skills",
        description:
          "Strong communicator, adaptable critical thinker, unbeatable positive attitude",
      },
    ];
    return (
      <div className="skills">
        <div className="skills-content">
          {skills.map((skill) => (
            <SkillItem data={skill} />
          ))}
        </div>
        <div className="skills-title">
          <h2>Skills</h2>
        </div>
      </div>
    );
  }
}
