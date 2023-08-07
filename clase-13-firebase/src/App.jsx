import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDoc, getDocs } from 'firebase/firestore';
import './App.css'
import { useEffect } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyCVmfSI0m0b8Uzs52Ht0jDPK9z4t5q6fhE",
  authDomain: "coder-teaching.firebaseapp.com",
  projectId: "coder-teaching",
  storageBucket: "coder-teaching.appspot.com",
  messagingSenderId: "59444682129",
  appId: "1:59444682129:web:75dcbd49923112c81f4e30"
};

initializeApp(firebaseConfig);

function App() {
  useEffect(() => {
    const db = getFirestore();
    const product = doc(db, 'products', 'XmQlQZZ5sbnlacsNo0ry');
    getDoc(product)
      .then((snapshot) => {
        if(snapshot.exists()) {
          console.log('snapshot:', snapshot.id)
          console.log('snapshot:', snapshot.data())
        }
      })
      .catch((error) => {
        console.error('error:', error)
      })
  }, []);

  useEffect(() => {
    const db = getFirestore();
    const productCollection = collection(db, 'products');
    getDocs(productCollection)
      .then((snapshot) => {
        snapshot.docs.map((product) => {
          console.log('product:', product.id);
          console.log('product:', product.data());

        })
        // console.log('snapshot:', snapshot.docs)
      })
      .catch((error) => {
        console.error('error:', error)

      })

  }, []);

  return (
    <>
      <h1>Hola Coders</h1>
    </>
  )
}

export default App
