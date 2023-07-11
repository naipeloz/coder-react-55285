import Item from './componentes/Item'

import './App.css'

const productos = [
  {
    title: "Producto 1",
    active: true,
    description: "Descripción del producto 1",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg/640px-Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg"
  },
  {
    title: "Producto 2",
    active: false,
    description: "Descripción del producto 2",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg/640px-Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg"
  },
  {
    title: "Producto 3",
    active: false,
    description: "Descripción del producto 3",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg/640px-Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg"
  },
  {
    title: "Producto 4",
    active: true,
    description: "Descripción del producto 20",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg/640px-Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg"
  }
];

function App() {
  
  function renderItems () {
    const listItems = productos.map((item) => {
      return (
        <Item
          key={item.title}
          title={item.title}
          description={item.description}
          image={item.image}
        />
      )
    });
    console.log(listItems);
    return listItems;
  }

  function renderActiveItems () {
    const listItems = productos.filter((item)=>item.active)
    .map((item) => {
      return (
        <Item
          key={item.title}
          title={item.title}
          description={item.description}
          image={item.image}
        />
      )
    });
    return listItems;
  }

  return (
    <>
      {renderActiveItems()}
    </>
  )
}

export default App


//https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg/640px-Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg