import Item from "./item";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const ItemList = ({productos}) => {
    return(

        <Row>
            {productos.map(prod => <Item key={prod.id} {...prod} />)}
        </Row>

    )
}
export default ItemList