import { createContext, useState } from "react";
import { addDoc, doc, collection, getDocs, getFirestore, query, where, updateDoc, writeBatch } from 'firebase/firestore';

export const FirestoreContext = createContext();

export default function FirestoreProvider ({ defaultValues = [], children}) {
  const [products, setProducts] = useState([]);

  const db = getFirestore();

  function getAllProducts() {
    const productCollection = collection(db, 'products');
    getDocs(productCollection)
      .then((snapshot) => {
        const tempProducts = []
        snapshot.docs.map((product) => {
          tempProducts.push({
            id: product.id,
            ...product.data()
          })
        })
        setProducts(tempProducts);
      })  
  }

  function getProductsByCategory (category) {
    const q = query(collection(db, 'products'), where('category', '==', category));
    getDocs(q)
      .then((snapshot) => {
        console.log('snapshot:', snapshot)
        if (snapshot.size === 0) {
          console.log('No results')
        }
        snapshot.docs.map((product) => {
          console.log('product:', product.id);
          console.log('product:', product.data());
        })
      })  
  }

  function addProductToCart (product) {
    const itemToCart = {
      user: {
        name: 'Julian',
        surname: 'Salcedo'
      },
      item: [
        product
      ]
    }

    // Primero agrego el producto a la orden
    const ordersCollection = collection(db, 'orders');
    addDoc(ordersCollection, itemToCart)
      .then((order) => {
        console.log('order:', order)
      })

    // Descontar del stock
    const productDoc = doc(db, 'products', product.id);
    updateDoc(productDoc, {stock: product.stock - 1})
  }

  return (
    <FirestoreContext.Provider value={{
      addProductToCart,
      getAllProducts,
      getProductsByCategory,
      products
    }}>
      {children}
    </FirestoreContext.Provider>
  )
}

