import "./style/navbar.css";

function Navbar({ darkMode, switchDarkMode }) {
  return (
    <nav
      className="navbar"
      style={
        darkMode
          ? { backgroundColor: "black" }
          : {
              backgroundColor: "rgb(255, 255, 255)",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
            }
      }
    >
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
