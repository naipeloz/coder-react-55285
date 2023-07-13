import './index.css'

function ListItem (props) {

  console.log("PERSONAJES: ", props.data)

  function renderCharacters () {
    const charactersList = props.data.map((character) => {
      return (
        <div key={character.name}>
          <h1>{character.name}</h1>
          <img src={character.image} alt={character.name} height={100} width={100}/>
        </div>
      )
    })
    return charactersList;
  }

  return (
    <div className='list__container'>
      <h1>Aca van a ir los personajes</h1>
      {renderCharacters()}
    </div>
  )
}

export default ListItem