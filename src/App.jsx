import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { LangContext } from "./contexts/LangContext";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);


  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <LangContext.Provider value={"uz"}>
      <div className={isDarkMode ? "dark-mode" : "light-mode"}>
        <div className="container">
          <Header darkMode={isDarkMode} toggleMode={toggleMode} />
          <Main />
        </div>
      </div>
    </LangContext.Provider>
  );
}

export default App;
