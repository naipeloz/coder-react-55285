import { useEffect, useState } from 'react';
import ListItem from '../../components/ListItem';

function Home() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((response) => {
        setCharacters(response.results)
      })
  }, []);


  return (
    <>
      <main className='main__container'>
        <ListItem
          items={characters}
        />
      </main>
    </>
  )
}

export default Home;
