import { useState } from 'react'
import InputCart from './componentes/InputCart';
import ButtonCart from './componentes/ButtonCart';
import './App.css'
import Test from './componentes/Test';



function App() {
  const [loading, setLoading] = useState(true);

  const config = {
    CssClass : loading ? 'success' : 'error',
    description: 'Hello Coders, esto es React!'
  }

  const Count = loading ? InputCart : ButtonCart;

  function renderText () {
    if (loading) {
      return (<h1>LOADING</h1>)
    }

    return (<h2>CARGADO</h2>)
  }

  const renderTextArrow = () => loading ? <h1>LOADING</h1> : <h2>CARGADO!</h2>;

  return (
    <>

      <Count description="Hola coders"/>

      {loading && <h1>LOADING</h1>}
      {!loading && <h2>CARGADO!</h2>}

      {loading ? <h1>LOADING</h1> : <h2>CARGADO!</h2>}

      {renderTextArrow()}

      <div style={{
        background: loading ? 'red' : 'blue', 
      }}>
        <h1 className={`${loading ? 'success' : 'error' } message`}>SE COMPLETO LA PETICION</h1>
      </div>


    <Test {...config}/>
      
    </>
  )
}

export default App
