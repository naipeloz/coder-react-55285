import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail () {
  const {id} = useParams();
  const [personaje, setPersonaje] = useState(null);
  console.log('id:', id)

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setPersonaje(res)
      })
  }, [id])  

  return (
    <>
      <h1>{personaje?.name}</h1>
      <img src={personaje?.image} alt={personaje?.name} width={400} height={400}/>
      
    </>
  )
}

export default Detail;
