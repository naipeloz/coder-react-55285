import { useState } from "react";
import {Link} from 'react-router-dom'

function Item (props) {

  return (
    <div className="item__box">
      <h1>{props.item.name}</h1>
      <h2>{props.item.species}</h2>
      <img src={props.item.image} alt={props.item.name} width={100} height={100}/>
      <Link to={`/personaje/${props.item.id}`}>
        <div>Ver personaje</div>
      </Link>
    </div>
  )
}

export default Item;
