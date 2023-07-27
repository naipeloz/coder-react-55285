import { useContext, useEffect } from "react";
import { ThemeContext } from "../../App";

function Container () {

  const isDarkMode = useContext(ThemeContext);
  
  useEffect(() => {
    console.log('Valor del isDarkMode: ', isDarkMode);
  }, [isDarkMode])

  return (
    <div>
      <h1>Soy el componente hijo</h1>
      {isDarkMode ? <h2>Estoy en dark mode</h2> : <h2>Estoy en light mode</h2> }
    </div>
  )

}

export default Container;