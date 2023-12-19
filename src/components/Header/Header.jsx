import "./Header.css";
import logo from "../../../public/vite.svg";

function Header() {
  return (
    <div>
      <header>
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
        </ul>
      </header>
    </div>
  );
}

export default Header;
