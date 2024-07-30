import { useContext, useState, createContext } from 'react';

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const isDarkMode = darkMode ? 'dark' : 'light';

  const toggelTheme = () => {
    setDarkMode(!darkMode);
  };
  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        toggelTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};