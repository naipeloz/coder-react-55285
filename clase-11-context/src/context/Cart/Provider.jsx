import { createContext, useState } from 'react';

export const CartContext = createContext();

export default function CartProvider ({ defaultValues = [], children }) {
  const [productos, setProductos] = useState([]);

  function addItemToCart (item) {
    setProductos([
      ...productos,
      item
    ])
  }
  
  return (
    <CartContext.Provider value={{ 
      name: 'CartContext',
      addItemToCart,
      quantity: productos.length,
      productos
    }}>
      {children}
    </CartContext.Provider>
  )
}
