import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';

import './App.css'
import ListItem from './components/ListItem';

function App() {
  const categories = ['Human', 'Alien', 'All'];
  const [originals, setOriginals] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((response) => {
        console.log('response.results:', response.results)
        setCharacters(response.results)
        setOriginals(response.results)
      })
      // Pendiente mostrar el error
      .catch((error) => {
        console.log('error:', error);
      })
  }, []);

  useEffect(() => {
    if(selectedCategory === 'All') {
      setCharacters(originals)
    } else {
      const newData = originals.filter((character) => {
        return character.species === selectedCategory
      })
      setCharacters(newData);
    }
  }, [selectedCategory]);

  const renderFavorites = () => {
    return favorites.map((item, index) => {
      return(
        <p key={`favorite-${index}`}>{item.note}</p>
      )
    })
  }

  const addFavorite = (item) => {
    console.log('favorites:', favorites)
    setFavorites([...favorites, item])
  }

  return (
    <>
      <main className='main__container'>
        <Navbar
          items={categories}
          onClick={setSelectedCategory}
        />
        <ListItem
          items={characters}
          onClick={addFavorite}
        />
        <section className='selected__characters'>
          {renderFavorites()}
        </section>
      </main>
    </>
  )
}

export default App
