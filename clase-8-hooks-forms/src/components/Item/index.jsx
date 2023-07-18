import { useState } from "react";

function Item (props) {
  const [note, setNote] = useState('');
  const [specie, setSpecie] = useState(null);

  function saveToFavorites () {
    console.log(note)
    console.log(specie)
    props.onClick({
      note: note,
      specie: specie
    })
  }

  return (
    <div className="item__box">
      <h1>{props.item.name}</h1>
      <h2>{props.item.species}</h2>
      <img src={props.item.image} alt={props.item.name} width={100} height={100}/>
      <div className="form__container">
        <input type="text" placeholder="nota" value={note} onChange={(e) => setNote(e.target.value)}/>
        <select name="category" value={specie} onChange={(e) => setSpecie(e.target.value)}>
          <option value="">-----</option>
          <option value="Human">👱🏼‍♀️👨🏼‍🦱</option>
          <option value="Alien">👽</option>
        </select>
        <button onClick={saveToFavorites}>Agregar a favoritos</button>
      </div>
    </div>
  )
}

export default Item;
