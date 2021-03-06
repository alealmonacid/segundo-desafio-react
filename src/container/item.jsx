import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Item = ({ id, nombre, imagen_producto, precio, categoria, stock }) => {
    return (
        <Col xs={2} md={3} lg={4}>
            <Row className='containerProducto'>
            <Col md={12} lg={12}><img src={imagen_producto} alt={nombre} className='ImgProduct'/></Col>
            <Col md={12} lg={12}><h2 className='tituloProducto'>{nombre}</h2></Col>
            <Col md={6} lg={6}><h3 className='categoriaProducto'>{categoria}</h3></Col>
            <Col md={6} lg={6}><h3 className='categoriaProducto'>Stock: {stock}</h3></Col>
            <Col md={12} lg={12}><h3 className='precioProducto'>${precio}</h3></Col>
            <Col md={12} lg={12}><Button variant="danger"><Link to={`/producto/${id}`}>Ver detalle</Link></Button></Col>
            </Row>
        </Col>

    )
}

export default Item