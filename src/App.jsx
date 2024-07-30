import { useContext, useState, createContext, useEffect } from 'react';
import {Navigation } from './components/Navigation'
import { ThemeProvider} from "./components/ThemeProvider";
import { Switch} from "./components/Switch";
import { Products} from "./components/Products";
import './App.css';


function App() {
  return (
    <>
      <ThemeProvider>
        <header>
          <Navigation />
          <Switch />
        </header>
        <Products/>
      </ThemeProvider>
    </>
  );
}

export default App;
