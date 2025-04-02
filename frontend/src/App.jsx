import "./style/app.css";
import darkModeIcon from "./pictures/svg/dark_mode.svg";
import Navbar from "./Navbar";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function switchDarkMode() {
    setDarkMode((prevDark) => !prevDark);
  }
  return (
    <div className="app">
      <header>
        <Navbar darkMode={darkMode} switchDarkMode={switchDarkMode} />
        <button
          className="dark-mode-button"
          onClick={() => switchDarkMode()}
          style={{ position: "absolute", left: "69%", height: "100%" }}
        >
          <img src={darkModeIcon} alt="dark_mode" className="dark-mode-icon" />
        </button>
      </header>
    </div>
  );
}
export default App;
