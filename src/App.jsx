import { useContext, useState, createContext, useEffect } from 'react';
import './App.css';

const NavBar = () => {
  return (
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Help</li>
    </ul>
  );
};

const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
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

const useTheme = () => {
  return useContext(ThemeContext);
};

const Switch = () => {
  const { isDarkMode, toggelTheme } = useTheme();

  useEffect(() => {
    document.documentElement.setAttribute('data-mode-type', isDarkMode);
  }, [isDarkMode]);

  const handle = (e) => {
    toggelTheme(e.target.checked);
  };

  return (
    <div className="switch-container">
      <label htmlFor="switch"></label>
      <input type="checkbox" onChange={handle} id="switch" />
      <span className="slider"></span>
    </div>
  );
};

function App() {
  return (
    <>
      <ThemeProvider>
        <header>
          <NavBar />
          <Switch />
        </header>
      </ThemeProvider>
    </>
  );
}

export default App;
