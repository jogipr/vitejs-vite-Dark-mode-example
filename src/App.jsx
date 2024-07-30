import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import {Navigation } from './components/Navigation'
import { ThemeProvider} from "./components/ThemeProvider";
import { Switch} from "./components/Switch";
import { Products} from "./components/Products";

import './App.css';


function App() {
  return (
    <>
    <Router>
      <ThemeProvider>
        <header>
          <Navigation />
          <Switch />
        </header>
        <Routes>
          <Route path='/' element={ <Products/>}></Route>
          <Route path='/products/:id' element={ <Products/>}></Route>
        </Routes>
       
      </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
