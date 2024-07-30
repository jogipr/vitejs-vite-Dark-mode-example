import {useEffect} from 'react'
import { useTheme } from './ThemeProvider'

export const Switch = () => {
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