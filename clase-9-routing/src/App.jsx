import { 
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Home from './pages/Home';
import Detail from './pages/Detail';
import About from './pages/About';
import Navbar from './components/Navbar';

import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <main id='main__container'>
        <Routes>
          <Route
            exact
            path='/'
            element={<Home/>}
          />
          <Route
            path='personaje/:id'
            element={<Detail/>}
          />
          <Route
            path='about'
            element={<About/>}
          />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
