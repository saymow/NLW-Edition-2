import React, {
  useContext,
  useEffect,
  createContext,
  useState,
  useCallback,
} from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "../Styles/GlobalStyles";

import { darkTheme, lightTheme } from "../Helper/theme_Related";

const Context = createContext(
  {} as {
    toggleTheme(): void;
    actualTheme: string;
  }
);

const AppContext: React.FC = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = useCallback(() => {
    setTheme((prevValue) => {
      let newTheme = prevValue === "light" ? "dark" : "light";
      localStorage.setItem("@Theme:", newTheme);

      return newTheme;
    });
  }, []);

  useEffect(() => {
    const storagedTheme = localStorage.getItem("@Theme:");

    if (storagedTheme === "dark") toggleTheme();
  }, [toggleTheme]);

  return (
    <Context.Provider
      value={{
        toggleTheme,
        actualTheme: theme,
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
