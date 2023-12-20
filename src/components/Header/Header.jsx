import "./Header.css";
import logo from "../../../public/vite.svg";
import { useContext, useState } from "react";
import { LangContext } from "../../contexts/LangContext";
import { useTranslation } from "react-i18next";

function Header({ darkMode, toggleMode }) {
  const value = useContext(LangContext);
  const [language, setLanguage] = useState("en");
  const { t, i18n } = useTranslation();

  function handleLang(e) {
    setLanguage(e.target.value);
  }

  return (
    <div>
      <header className={darkMode ? "dark-mode" : "light-mode"}>
        <div className="logo-wrapper">
          <img src={logo} alt="Logo" />
          <h1 className="site-logo">Kreed</h1>
        </div>

        <ul className="sitenav__list">
          <li>{t("home", { lng: language })}</li>
          <li>{t("about", { lng: language })}</li>
          <li>{t("work", { lng: language })}</li>
          <li>{t("services", { lng: language })}</li>
          <li>{t("contact", { lng: language })}</li>
          <button onClick={toggleMode} className="nav-btn">
            {darkMode
              ? t("switch", { lng: language })
              : t("switch", { lng: language })}
          </button>
        </ul>
      </header>
      <select onChange={handleLang}>
        <option value="en">English</option>
        <option value="uz">Uzbekcha</option>
        <option value="ru">Ruscha</option>
      </select>
    </div>
  );
}

export default Header;
