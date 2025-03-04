import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "../styles.css"; // Import styles

function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={`theme-container ${theme}`}>
      <p>Current Theme: <strong>{theme}</strong></p>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeSwitcher;
