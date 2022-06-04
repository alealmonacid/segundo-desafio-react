import {useState, useEffect} from 'react'
import { getProductos } from '../data/data'
import ItemList from './itemList'

const ItemListContainer = (props) => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        getProductos().then(res => {
            setProductos(res)
        })
    },[])

    return (
        <div className="saluditop">
            <h2>Hola, {props.name} Bienvenido!</h2>
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer