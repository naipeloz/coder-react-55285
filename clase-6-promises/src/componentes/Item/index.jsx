function Item (props) {
  return(
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <img src={props.image} alt="" width={250} height={250} />
    </div>
  )
} 

export default Item;
