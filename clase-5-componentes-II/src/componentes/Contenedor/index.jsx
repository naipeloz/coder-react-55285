import { useEffect, useState } from 'react';
import Display from '../Display';
import Boton from '../Boton';

import './styles.css'

function Contenedor () {
  const [numero1, setNumero1] = useState(0);
  const [operando, setOperando] = useState(0);
  const [operacionFinal, setOperadorFinal] = useState('');
  const [color, setColor] = useState('yellow');
  const [darkModeEnable, setDarkModeEnable] = useState(false);

  function changeMode () {
    setDarkModeEnable(!darkModeEnable);
  }
  
  // Se dispara cuando el componente se monta
  useEffect(() => {
    console.log("Bienvenidos al after class")
  }, []);

  // Se dispara cuando el valor de numero1 cambia
  useEffect(() => {
    console.log("Cambio el valor de numero1")
  }, [numero1])

  useEffect(() => {
    if(darkModeEnable) {
      setColor('red');
    } else{
      setColor('yellow')
    }
  }, [darkModeEnable])

  // Se dispara cuando algo cambia en el state
  useEffect(() => {
    console.log("Hubo un cambio")   
  })

  function modificarNumero (nuevoNumero) {
    if(numero1 === 0) {
      setNumero1(nuevoNumero)
    } else {
      const nuevoNumeroAGuardar = numero1+nuevoNumero;
      setNumero1(nuevoNumeroAGuardar);
    }
  }

  function modificarOperacion (operacion) {
    setOperando(numero1);
    setNumero1(0);
    if (operacion === '=') {
      switch(operacionFinal) {
        case '+':
          console.log('TENGO QUE SUMAR')
          setNumero1(parseInt(numero1) + parseInt(operando));
          break;
        case '-':
          console.log('TENGO QUE SUMAR')
          setNumero1(parseInt(operando) - parseInt(numero1));
          break;
        case 'x':
          console.log('TENGO QUE SUMAR')
          setNumero1(parseInt(numero1) * parseInt(operando));
          break;
        case '/':
          console.log('TENGO QUE SUMAR')
          setNumero1(parseInt(numero1) / parseInt(operando));
          break;
      }
    } else {
      setOperadorFinal(operacion);
    }
  }

  return (
    <>
    <span
      style={{border: '1px solid black', margin: 10}}
      onClick={changeMode}
    >
      { darkModeEnable ? 'Dark' : 'Light'} MODE
    </span>
    <div id="container">
      <Display
        theme={color}
        valor={numero1}
      />
      <Boton 
        onClickBoton={modificarNumero}
        value="7"
      />
      <Boton
        onClickBoton={modificarNumero}
        value="8"  
      />
      <Boton
        onClickBoton={modificarNumero}
        value="9"  
      />
      <Boton
        onClickBoton={modificarOperacion}
        value="+"  
      />
      <Boton
        onClickBoton={modificarNumero}
        value="4"  
      />
      <Boton
        onClickBoton={modificarNumero}
        value="5"  
      />
      <Boton
        onClickBoton={modificarNumero}
        value="6"  
      />
      <Boton
        onClickBoton={modificarOperacion}
        value="-"  
      />
      <Boton
        onClickBoton={modificarNumero}
        value="1"  
      />
      <Boton
        onClickBoton={modificarNumero}
        value="2"  
      />
      <Boton
        onClickBoton={modificarNumero}
        value="3"  
      />
      <Boton
        onClickBoton={modificarOperacion}
        value="x"  
      />
      <Boton 
        value="."  
      />
      <Boton
        onClickBoton={modificarNumero}
        value="0"  
      />
      <Boton
        onClickBoton={modificarOperacion}
        value="="  
      />
      <Boton
        onClickBoton={modificarOperacion}
        value="/"  
      />
    </div>
    </>
  )
}

export default Contenedor;
