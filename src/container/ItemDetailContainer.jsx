import { useState, useEffect } from 'react'
import { getProductosPorId } from '../data/data'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState()
    const { productId } = useParams()
    useEffect(() => {
        getProductosPorId(productId).then(response => {
            setProducto(response)
        })
    }, [])

    return (
        <>
        <ItemDetail {...producto}/>
        </>
    )
}

export default ItemDetailContainer
