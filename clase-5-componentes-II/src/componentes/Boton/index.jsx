import './styles.css'

function Boton (props) {
  function handleClick () {
    props.onClickBoton(props.value)
  }

  return (
    <div 
      className="boton"
      onClick={handleClick}
    >
      {props.value}
    </div>
  )
}

export default Boton;
