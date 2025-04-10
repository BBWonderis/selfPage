import "./style/navbar.css";
import "./style/dark-light-mode.css";
function Navbar({ darkMode }) {
  return (
    <nav className={`${darkMode ? "dark-mode" : "light-mode"} navbar`}>
      <div className={`buttons ${darkMode ? "dark-mode" : "light-mode"}`}>
        <button className="home-button">
          <p>Home</p>
        </button>
        <button className="about-button">
          <p>About me</p>
        </button>
        <button className="work-button">
          <p>My work</p>
        </button>
        <button className="contact-button">
          <p>Contact</p>
        </button>
      </div>
    </nav>
  );
}
export default Navbar;
