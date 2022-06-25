import { useState, useEffect } from 'react'
// import { getProductosPorId } from '../data/data'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState()
    const { productId } = useParams()
    useEffect(() => {
        // getProductosPorId(productId).then(response => {
        //     setProducto(response)
        // })
        const docRef = doc(db, "items", productId)
        //2.- llamar a firestore
        getDoc(docRef)
            .then((resp) => {
                setProducto({ id: resp.id, ...resp.data()})
            })
    }, [productId])

    return (
        <>
        <ItemDetail {...producto}/>
        </>
    )
}

export default ItemDetailContainer
