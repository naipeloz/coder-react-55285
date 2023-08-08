import { initializeApp } from 'firebase/app';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FirestoreProvider from './context/firestore/Provider';
import './App.css'
import Home from './pages/Home';

const firebaseConfig = {
  apiKey: "AIzaSyCVmfSI0m0b8Uzs52Ht0jDPK9z4t5q6fhE",
  authDomain: "coder-teaching.firebaseapp.com",
  projectId: "coder-teaching",
  storageBucket: "coder-teaching.appspot.com",
  messagingSenderId: "59444682129",
  appId: "1:59444682129:web:75dcbd49923112c81f4e30"
};

initializeApp(firebaseConfig)

function App() {

  return (
    <FirestoreProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<Home/>}
            exact
          />
        </Routes>
      </BrowserRouter>
    </FirestoreProvider>
  )
}

export default App
