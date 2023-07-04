// Lo primero que se escribe en el componente son los imports
// Primero se importan las librerias externas
// Luego el codigo que estoy escribiendo
// Por ultimno los estilos
import { useState } from 'react';
import Button from './componentes/Button';
import Titulo from './componentes/Titulo';

function App() {
  const [count, setCount] = useState(0);

  function incrementarContador () {
    setCount(count + 1);
  }

  function disminuirContador () {
    if(count != 0){
      setCount(count - 1);
    }
  }

  return (
    <>
      <Titulo 
        value="Mi primer contador"
      />
      <h2>Valor del contador {count}</h2>
      <Button
        color="green"
        handleClick={incrementarContador}
        value="Incrementar"
      />
      <Button
        color="red"
        handleClick={disminuirContador}
        value="Disminuir"
      />
    </>
  )
}

export default App
