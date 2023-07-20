import Item from "../Item";

function ListItem (props) {

  const renderItems = () => {
    return props.items.map((item) => {
      return(
        <Item
          key={item.id}
          item={item}
          onClick={props.onClick}
        />
      )
    })
  }

  return (
    <section className='list__characters'>
      {renderItems()}
    </section>
  )
}

export default ListItem;
