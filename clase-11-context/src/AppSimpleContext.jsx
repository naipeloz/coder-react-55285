import { createContext, useState } from 'react';
import Container from './components/container';
import OtherContainer from './components/otherContainer';

import './App.css'

export const ThemeContext = createContext();

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <ThemeContext.Provider value={isDarkMode}>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>Cambiar tema</button>
      <Container/>
      <OtherContainer/>
    </ThemeContext.Provider>
    
  )
}

export default App
