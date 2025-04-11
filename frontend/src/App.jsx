import "./style/app.css";
import darkModeIcon from "./pictures/svg/dark_mode.svg";
import Navbar from "./Navbar";
import { useState } from "react";
import "./style/dark-light-mode.css";
import "./style/introduction.css";

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
    </div>
  );
}
export default App;
