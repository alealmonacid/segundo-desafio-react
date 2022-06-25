import { useContext } from 'react';
import CartContext from '../context/CartContext';

const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)

    return(
        <div className="Cart">
            <img src="/carrito.png" alt='cart' className='CartImg'/>
            <span className="spanIconNumber">{ totalQuantity }</span>
        </div>
    );
}

export default CartWidget