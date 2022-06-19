import { useState } from 'react'
import { Row, Col, Button } from 'react-bootstrap'

const ItemCount = ({stock = 0, initial = 1, onAdd})=> {
   const [quantity, setQuantity] = useState(initial)

   const increment = () => {
       if(quantity < stock) {
           setQuantity(quantity+1)
       }
   }

   const decrement = () => {
       if(quantity > 1) {
           setQuantity(quantity - 1)
       }     
   }

   return(
       <Row className='counterPDP'>
            <Col className='quantityPDP'>
                <Button className="buttonQuantityPDP" onClick={decrement}>-</Button>
                <h4 className='numberQuantityPDP'>{quantity}</h4>
                <Button className="buttonQuantityPDP" onClick={increment}>+</Button>
            </Col>
            <Col>
                <Button className="btnCursoPDP" onClick={() => onAdd(quantity)}>Agregar al carrito</Button>
            </Col>
       </Row>
   )

}
export default ItemCount