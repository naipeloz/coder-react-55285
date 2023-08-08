import { useContext, useEffect } from "react";
import { FirestoreContext } from "../../context/firestore/Provider";

function Home () {
  const { getAllProducts, products, addProductToCart } = useContext(FirestoreContext);

  useEffect(() => {
    getAllProducts();
  }, [])

  function onAddToCart (product) {
    console.log("Se agrega el producto al carrito: ", product)
    addProductToCart(product)
  }

  function renderColors(colors) {
    return  (
      <ul>
        {colors?.map((color, i) => (
          <li key={i}>{color}</li>
        ))}
      </ul>
    )
  }

  function renderProducts() {
    return products.map((product) => (
      <div key={product.id}>
        <h1>{product.name}</h1>
        <h2>{product.category}</h2>
        {renderColors(product?.colors) }
        <button onClick={() => onAddToCart(product)}>Agregar al carrito</button>
      </div>
    ))
  }

  return(
    <>
      {renderProducts()}
    </>
  )

}

export default Home;
