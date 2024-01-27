import {
  createContext,
  useState,
  useContext,
  useCallback,
  useLayoutEffect
} from "react";
import { ThemeProvider as StyledProvider } from "styled-components";
import { lightTheme, darkTheme } from "../style/theme";
import { useMediaQuery } from "react-responsive";

/// 테마는 사용하는 것 없이 사용자 테마색에 따라서 라이트, 다크 모드가 변경됩니다.
const ThemeContext = createContext({});

const ThemeProvider = ({ children }) => {
  const isDarkMode = useMediaQuery({ query: "(prefers-color-scheme: dark)" });
  const [ThemeMode, setThemeMode] = useState("light");

  useLayoutEffect(() => {
    setThemeMode(isDarkMode ? "dark" : "light");
  }, [isDarkMode]);
  const themeObject = ThemeMode === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ ThemeMode, setThemeMode }}>
      <StyledProvider theme={themeObject}>{children}</StyledProvider>
    </ThemeContext.Provider>
  );
};

function useTheme() {
  const context = useContext(ThemeContext);
  const { ThemeMode, setThemeMode } = context;

  const toggleTheme = useCallback(() => {
    if (ThemeMode === "light") {
      setThemeMode("dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      setThemeMode("light");
      window.localStorage.setItem("theme", "light");
    }
  }, [ThemeMode]);

  return [ThemeMode, toggleTheme];
}

export { ThemeProvider, useTheme };
