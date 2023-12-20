import "./Header.css";
import logo from "../../../public/vite.svg";

function Header({ darkMode, toggleMode }) {
  return (
    <div>
      <header className={darkMode ? "dark-mode" : "light-mode"}>
        <div className="logo-wrapper">
          <img src={logo} alt="Logo" />
          <h1 className="site-logo">Kreed</h1>
        </div>

        <ul className="sitenav__list">
          <li>Home</li>
          <li>About Us</li>
          <li>How It Works</li>
          <li>Services</li>
          <li>Contact</li>
          <button onClick={toggleMode}>
            {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </button>
        </ul>
      </header>
    </div>
  );
}

export default Header;
