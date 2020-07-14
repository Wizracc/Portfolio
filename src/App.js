import React from "react";
import Landing from "./components/Landing";
import Topbar from "./components/Topbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "./styles/app.css";

function App() {
  return (
    <div className="app">
      <Topbar />
      <section id="landing">
        <Landing />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
