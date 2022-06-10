import {useState, useEffect} from 'react'
import { getProductos, getProductosPorCategoria } from '../data/data'
import {useParams} from 'react-router-dom'
import ItemList from './ItemList'
import Container from 'react-bootstrap/Container';

const ItemListContainer = (props) => {
    const [productos, setProductos] = useState([])
    const {categoryId} = useParams()

    useEffect(() => {
        // getProductos().then(res => {
        //     setProductos(res)
        // })
        if(!categoryId){
            getProductos().then(producto => {setProductos(producto)}).catch(error => { console.log(error) })
        } else {
            getProductosPorCategoria(categoryId).then(producto => {setProductos(producto)}).catch(error => { console.log(error) })
        }
    },[categoryId])

    return (
        <Container fluid="lg">
            {productos.length > 0 ? <ItemList productos={productos}/> : <h1>Categoría sin productos</h1>}
        </Container>
    )
}

export default ItemListContainer