import React, { Component } from "react";
import ProfileBar from "./ProfileBar";
import "../styles/about.css";

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="bar">
          <ProfileBar></ProfileBar>
        </div>
        <div className="content">
          <h3>About Me</h3>
          <p>
            I've been programming in school and on my own for about a decade,
            since mid 2010. I started out with Python to pick up the basics, the
            for most of my school career Java was the go-to language in the
            curriculum. I picked up an interest for web programming when I went
            to Metropolitan Community College in Omaha to start out my degree
            track. From there, I picked up Ruby on Rails as my first web
            framework. Along the way, I dabbled in various gaming communities
            making Discord chat room bots and utilities to solve small problems
            or automate basic tasks. Python and Node.js were my scripting
            languages of choice. While at the University of Nebraska at Omaha, I
            worked more in many languages and paradigms, and for my major
            projects, Python with Flask or Django capped off my degree. This
            website is built using React, along with a few other projects I've
            used to help teach myself along the way. So far, I think Javascript
            is pretty fun, but don't tell the other devs I said that.
          </p>
          <h4>If you'd like to contact me</h4>
          <ul>
            <li>Email: Wizracc@gmail.com</li>
            <li>GitHub: Wizracc</li>
          </ul>
          <p>
            If I've provided you with another means of contacting me, please use
            that. If you call me, please leave a message as I may not always be
            available to answer. I have not provided social media links, since I
            am not active on social media platforms.
          </p>
        </div>
      </div>
    );
  }
}
