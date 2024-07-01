import React, { createContext, useState, useContext, ReactNode } from "react";
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { GlobalStyles } from "./GlobalStyles";

interface ThemeContextType {
  toggleTheme: () => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const lightTheme = {
  background: '#fff',
  text: '#000',
  inputBorder: '#ccc',
  buttonBackground: '#4CAF50',
  buttonBackgroundHover: '#45a049',
  noteBackground: '#f9f9f9',
  actionButtonBackground: '#f44336',
  actionButtonBackgroundHover: '#d32f2f',
};

const darkTheme = {
  background: '#282c34',
  text: '#fff',
  inputBorder: '#555',
  buttonBackground: '#4CAF50',
  buttonBackgroundHover: '#45a049',
  noteBackground: '#555',
  actionButtonBackground: '#f44336',
  actionButtonBackgroundHover: '#d32f2f',
};

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
    setIsDark((prevIsDark) => !prevIsDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <StyledThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
