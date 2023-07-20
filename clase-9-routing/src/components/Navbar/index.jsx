import { Link } from 'react-router-dom';

function Navbar () {
  return (
    <nav id='navbar'>
      <Link to='/'>
        <span className='link'>Home</span>
      </Link>
      <Link to='/about'>
        <span className='link'>Acerca del proyecto</span>
      </Link>
    </nav>
  )
}

export default Navbar;
