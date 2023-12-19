import "./Main.css";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import Logo from "../../../public/hero-img.png";

function Main() {
  return (
    <div className="main">
      <div className="left-section">
        <h1 className="hero__title">Connecting all your banking needs</h1>
        <p>A smart mobile application you can control your business needs</p>
        <div className="buttons">
          <button>
            <FaApple />
            Download App
          </button>
          <button>
            <FaGooglePlay />
            Download App
          </button>
        </div>
      </div>
      <div className="img-wrapper">
        <img src={Logo} alt="" />
      </div>
    </div>
  );
}

export default Main;
