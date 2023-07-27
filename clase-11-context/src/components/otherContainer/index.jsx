import { useContext } from "react";
import { ThemeContext } from "../../App";

function OtherContainer () {
  const isDarkMode = useContext(ThemeContext);

  return (
    <>
      <h1>Soy el otro componente, que tambien sabe cual es el theme</h1>
      {isDarkMode ? <h2>Estoy en dark mode</h2> : <h2>Estoy en light mode</h2> }
    </>
  )
}

export default OtherContainer;