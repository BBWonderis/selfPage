import "./style/app.css";
import darkModeIcon from "./pictures/svg/dark_mode.svg";
import Navbar from "./Navbar";
import { useState } from "react";
import "./style/dark-light-mode.css";
import "./style/introduction.css";
import "./style/about-me.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function switchDarkMode() {
    setDarkMode((prevDark) => !prevDark);
  }
  return (
    <div className={`${darkMode ? "dark-mode" : "light-mode"} app`}>
      <header>
        <Navbar darkMode={darkMode} />
        <button className="dark-mode-button" onClick={() => switchDarkMode()}>
          <img src={darkModeIcon} alt="dark_mode" className="dark-mode-icon" />
        </button>
      </header>
      <section className="introduction">
        <div className="objects">
          <div className="photo">
            <img src="/istockphoto-1335941248-612x612.jpg" alt="" />
          </div>
          <h2>Hi! I’m Lukáš Martiška! 👋🏻</h2>
          <h1>
            Computer science student at the Faculty of Informatics, Masaryk
            University in Brno.
          </h1>
          <p>
            I'm excited about building user-friendly and responsive web
            interfaces, and I'm always open to new challenges and opportunities
            to grow as a developer.
          </p>
          <div className="link-buttons">
            <button
              className="github-button"
              onClick={() =>
                (window.location.href = "https://github.com/BBWonderis")
              }
            >
              my github →
            </button>
            <button
              className="linkedln-button"
              onClick={() =>
                (window.location.href =
                  "www.linkedin.com/in/lukáš-martiška-ba2390312")
              }
            >
              my linkedln →
            </button>
          </div>
        </div>
      </section>
      <section className="about-me">
        <h2>Introduction</h2>
        <h1>About me</h1>
        <div className="objects">
          <div className="personal-photo">
            <img src="istockphoto-1335941248-612x612.jpg" alt="" />
          </div>
          <div className="text">
            <p>
              I am a computer science student at the Faculty of Informatics,
              Masaryk University in Brno, currently looking for my first
              internship or junior position. I’m passionate about frontend
              development, especially working with React, and I enjoy building
              clean, responsive user interfaces. While frontend is my main
              focus, I’m also curious to explore backend development and expand
              my skills full-stack. I'm a goal-oriented person who loves
              learning new things, solving logical problems, and constantly
              improving. Programming excites me because it’s both creative and
              analytical. Although I don’t have professional experience yet,
              I’ve worked on personal projects and I’m always experimenting to
              grow my skills. One of my challenges is that I sometimes
              underestimate my knowledge — but I’m working on gaining confidence
              by building more, collaborating, and learning from others.
            </p>
            <div className="text-buttons"></div>
            <h3>Tools i use</h3>
            <div className="tools-list"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default App;
