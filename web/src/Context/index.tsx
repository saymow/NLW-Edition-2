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
    loggedIn: Boolean;
    user?: UserProps;
    signIn(arg0: UserProps): void;
  }
);

interface UserProps {
  name: string;
  email: string;
  img_url: string;
}

const AppContext: React.FC = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [user, setUser] = useState<UserProps | undefined>(undefined);

  const toggleTheme = useCallback(() => {
    setTheme((prevValue) => {
      let newTheme = prevValue === "light" ? "dark" : "light";
      localStorage.setItem("@Theme:", newTheme);

      return newTheme;
    });
  }, []);

  const signIn = (data: UserProps) => setUser(data);

  useEffect(() => {
    const storagedTheme = localStorage.getItem("@Theme:");

    if (storagedTheme === "dark") toggleTheme();
  }, [toggleTheme]);

  return (
    <Context.Provider
      value={{
        loggedIn: Boolean(user),
        toggleTheme,
        actualTheme: theme,
        user,
        signIn,
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
