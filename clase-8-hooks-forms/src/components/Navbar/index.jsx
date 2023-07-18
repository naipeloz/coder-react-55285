
function Navbar (props) {
  
  return(
    <nav>
      <ul>
        {props.items.map((item, index) => {
          return (
            <li
              key={`category-${index}`}
              onClick={() => props.onClick(item)}
            >
              {item}
            </li>
          )
        })}
      </ul>
    </nav>
  )
} 

export default Navbar;
