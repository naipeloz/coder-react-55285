import './index.css';
// const Button = () => {
//   return (
//     <h1>Soy un botón, fijense que si lo soy</h1>
//   )
// }

function Button (props) {
  return (
    <div
      className='button'
      onClick={props.handleClick}
      style={{ background: props.color }}
    >
      {props.value}
    </div>
  )
}

export default Button;

