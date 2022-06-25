import CartContext from "../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom"
 
const Cart = () => {

    const { cart, deleteItem} = useContext(CartContext)
    console.log("ESOO",cart)

    return (
        <>
            <h2>Resumen del carrito </h2>
            <hr></hr>
            {
                cart.length === 0 ? 
                <div>
                No hay productos en tu carrito 
                <Link to={`/`}>Ir a comprar</Link>
                </div>
                
                :
                cart.map((item) => (
                    <div key={item.id}>
                    <div  className="miniCartContainer">
                    <div className="miniCart_right">
                            <img src={item.imagen_producto} alt={item.nombre} />
                        </div>
                        <div className="miniCart_left">
                            <h5>{item.nombre}</h5>
                            <p>Cantidad: {item.quantity}</p>
                            <h6>Precio: ${(item.precio)*(item.quantity)}</h6>
                        </div>
                        <div className="miniCart_trash" onClick={()=> deleteItem(item.id)}>🗑️</div>
                    </div>
                    
                       <hr></hr>
                    </div>
                ))
            }
            {/* <div>Precio total {Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(priceToPay())}</div> */}
        </>
    );
}

export default Cart;