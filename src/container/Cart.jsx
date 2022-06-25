import CartContext from "../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Cart = () => {

    const { cart, deleteItem, priceToPay } = useContext(CartContext)
    console.log("ESOO", cart)

    return (
        <>
            <h2 className="titleCart">Tu Carrito</h2>
            {
                cart.length === 0 ?
                    <div>
                        No hay productos en tu carrito
                        <Link to={`/`}>Ir a comprar</Link>
                    </div>

                    :
                    <Container>
                       <Row>
                                {
                                    cart.map((item) => (
                                        
                                            <Col xs={12} md={12} key={item.id} className="containerCartProduct">
                                                <Row>
                                                    <Col xs={4} md={4} className="containerImageCart">
                                                        <img src={item.imagen_producto} alt={item.nombre} className="imageCartProduct" />
                                                    </Col>
                                                    <Col xs={6} md={6} className="containerDataProductCart">
                                                        <Row>
                                                            <Col xs={12} md={12} className="itemCartName">{item.nombre}</Col>
                                                            <Col xs={12} md={12}>Cantidad: {item.quantity}</Col>
                                                            <Col xs={6} md={6}>Precio Normal: ${(item.precio)}</Col>
                                                            <Col xs={6} md={6}>Total: ${(item.precio) * (item.quantity)}</Col>
                                                        </Row>
                                                    </Col>
                                                    <Col xs={2} md={2} className="containerDeleteProductCart">
                                                        <div className="cartEliminarProducto" onClick={() => deleteItem(item.id)}>🗑️</div>
                                                    </Col>
                                                </Row>    
                                            </Col>
                                            
                                        
                                        // <tr key={item.id}>
                                        //     <td><img src={item.imagen_producto} alt={item.nombre} className="imageCartProduct" /></td>
                                        //     <td> 
                                        //         <Row>
                                        //             <Col xs={12} md={12}>{item.nombre}</Col>
                                        //             <Col xs={12} md={12}>Cantidad: {item.quantity}</Col>
                                        //         </Row>
                                        //         </td>
                                        //     <td><p>Cantidad: {item.quantity}</p></td>
                                        //     <td><h6>${(item.precio)}</h6></td>
                                        //     <td><h6>${(item.precio) * (item.quantity)}</h6></td>
                                        //     <td><div className="cartEliminarProducto" onClick={() => deleteItem(item.id)}>🗑️</div></td>
                                        // </tr>
                                    ))
                                }
                            </Row>
                        <div className="totalPrecioCart">Total {Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(priceToPay())}</div>
                    </Container>
            }

        </>
    );
}

export default Cart;