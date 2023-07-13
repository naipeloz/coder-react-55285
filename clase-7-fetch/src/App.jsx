import { useEffect, useState } from 'react';
import ListItem from './components/ListItem';

import './App.css'

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => {
        console.log("RESONSE SIN PROCESAR: ", response)
        return response.json()
      })
      .then((response) => {
        setCharacters(response.results)
      })
      .catch((error) => {
        console.log("Hubo un error: ", error)
      });
  }, []);

  return (
    <>
      <ListItem 
        data={characters}
      />
    </>
  )
}

export default App
