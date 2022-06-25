import { useContext } from 'react';
import CartContext from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)

    return(
            <Link to={`/cart`} className="linkCart">
                <div className="Cart">
                    <img src="/carrito.png" alt='cart' className='CartImg'/>
                    <span className="spanIconNumber">{ totalQuantity }</span>
                </div>
            </Link>
    );
}

export default CartWidget