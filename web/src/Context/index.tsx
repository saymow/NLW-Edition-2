import React, {
  useContext,
  useEffect,
  createContext,
  useState,
  useCallback,
} from "react";
import { ThemeProvider } from "styled-components";

import api from "../Services/api";
import GlobalStyles from "../Styles/GlobalStyles";

import { darkTheme, lightTheme } from "../Helper/theme_Related";

const Context = createContext(
  {} as {
    toggleTheme(): void;
    actualTheme: string;
    loggedIn: Boolean;
    user?: UserProps;
    signIn(arg0: SignData): Promise<SignInError | void>;
  }
);

interface UserProps {
  name: string;
  email: string;
  avatar?: string;
  whatsapp?: string;
  bio?: string;
}

interface SignData {
  email: string;
  password: string;
}

interface SignInError {
  message: string;
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

  function storeToken(token: string) {
    localStorage.setItem("@Auth:", `Bearer ${token}`);
  }

  const signIn = async (data: SignData) => {
    return await api
      .post("/signin", data)
      .then((response) => {
        const { token, userData } = response.data;
        storeToken(token);
        setUser(userData);
      })
      .catch((error) => error.response.data);
  };

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
