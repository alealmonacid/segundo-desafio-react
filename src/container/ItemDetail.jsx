import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const ItemDetail = ({ id, nombre, precio, categoria, imagen_producto, stock, descripcion }) => {
    return (
        <Col xs={12} md={12} lg={12}>
            <Row className='containerProducto'>
                <Col xs={12} md={6} lg={6}>
                    <img src={imagen_producto} alt={nombre} className='ImgProduct' />
                </Col>
                <Col xs={12} md={6} lg={6}>
                    <Row>
                        <Col md={12} lg={12}><h2 className='tituloProducto'>{nombre}</h2></Col>
                        <Col md={6} lg={6}><h3 className='categoriaProducto'>{categoria}</h3></Col>
                        <Col md={6} lg={6}><h3 className='categoriaProducto'>{descripcion}</h3></Col>
                        <Col md={6} lg={6}><h3 className='categoriaProducto'>Stock: {stock}</h3></Col>
                        <Col md={12} lg={12}><h3 className='precioProducto'>${precio}</h3></Col>
                    {/* <Col md={12} lg={12}><button className='addProducto'><Link to={`/producto/${id}`} className='Option'>Ver detalle</Link></button></Col> */}
                    </Row>
                </Col>
            </Row>
        </Col>

    )
}
export default ItemDetail