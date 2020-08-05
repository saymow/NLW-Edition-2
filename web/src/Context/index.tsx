import React, { useContext, createContext, useState, useCallback } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "../Styles/GlobalStyles";

import { darkTheme, lightTheme } from "../Helper/theme_Related";

const Context = createContext(
  {} as {
    toggleTheme(): void;
  }
);

const AppContext: React.FC = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = useCallback(
    () => setTheme((prevValue) => (prevValue === "light" ? "dark" : "light")),
    []
  );

  return (
    <Context.Provider
      value={{
        toggleTheme,
      }}
    >
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </Context.Provider>
  );
};

export function useGlobalState() {
  const context = useContext(Context);

  return context;
}

export default AppContext;
