import React, { createContext, useState } from "react";

// Create Theme Context
export const ThemeContext = createContext();

// ThemeProvider Component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
