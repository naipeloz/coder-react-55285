function Display (props) {
  return (
    <div style={{ background: props.theme, borderRadius: '5px', height: '80px', width: '100%'}}>
      <h1>{ props.valor }</h1>
    </div>
  )
}

export default Display;
