import { Link } from 'react-router-dom';
import { useContext } from 'react';
import CartIcon from '../../../public/cart.png'
import { CartContext } from '../../context/Cart/Provider';

function Navbar () {
  const { productos, quantity } = useContext(CartContext);
  console.log('productos:', productos)

  return (
    <nav id='navbar'>
      <Link to='/'>
        <span className='link'>Home</span>
      </Link>
      <Link to='/about'>
        <span className='link'>Acerca del proyecto</span>
      </Link>
      <img src={CartIcon} alt="cart" width={25} height={25} />({quantity})
    </nav>
  )
}

export default Navbar;
