import { useEffect, useState } from 'react'
import CountComponent from './components/Counter';

import './App.css'

function App() {

  const [name, setName] = useState('');
  const [items, setItems] = useState(['item1', 'item2', 'item3']);
  const [original, setOriginal] = useState(['item1', 'item2', 'item3']);

  useEffect(() => {
    const handleOnResize = event => {
      console.log('event:', event)
      console.log('La pantalla cambio de tamano')
    }

    window.addEventListener('resize', handleOnResize);

    return () => {
      console.log('Remover evento')
      window.removeEventListener('resize', handleOnResize);
    }

  }, [])

  const handleOnClick = (event) => {
    console.log('Evento clickeado: ', event)
  }

  const handleOnChangeName = (event) => {
    setName(event.target.value)
    const newItems = original.filter((i) => i.includes(event.target.value));
    setItems(newItems);
  }

  return (
    <>
    <ul>
      {items.map((i, index) => <li key={index}>{i}</li>)}
    </ul>
      {/* <input type="text" 
        placeholder='Nombre' 
        value={name} 
        onChange={setName}
      /> */}
      {/* <input type="text" 
        placeholder='Nombre' 
        value={name} 
        onChange={(event) => { setName(event.target.value) }}
      /> */}

      <CountComponent
        inputType='button'
      />


      <input type="text" 
        placeholder='Nombre' 
        value={name} 
        onChange={handleOnChangeName}
      />
      <h1>{name}</h1>
      <button onClick={handleOnClick}>Enviar</button>
    </>
  )
}

export default App
