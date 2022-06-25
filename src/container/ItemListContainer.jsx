import {useState, useEffect} from 'react'
// import { getProductos, getProductosPorCategoria } from '../data/data'
import { collection, getDocs, query, where} from 'firebase/firestore';
import { db } from '../firebase/config';
import {useParams} from 'react-router-dom'
import ItemList from './ItemList'
import Container from 'react-bootstrap/Container';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const {categoryId} = useParams()

    useEffect(() => {
        // getProductos().then(res => {
        //     setProductos(res)
        // })
        // if(!categoryId){
        //     getProductos().then(producto => {setProductos(producto)}).catch(error => { console.log(error) })
        // } else {
        //     getProductosPorCategoria(categoryId).then(producto => {setProductos(producto)}).catch(error => { console.log(error) })
        // }

        // const productsRef = collection(db, "items");

        const productsRef = categoryId ? ( 
            query(collection(db, 'items'), where('categoria', '==', categoryId))
        ) : ( collection(db, 'items') )

        getDocs(productsRef)
            .then((resp)=>{
                // setProductos(resp.docs.map((doc)=>doc.data()))
                const newItems = resp.docs.map((doc)=>{
                    return{
                        id: doc.id,
                        ...doc.data() /* Data: metodo de firestore */
                    }
                });
                console.log("nuevosItems",newItems)
                setProductos(newItems)
            })

    },[categoryId])

    return (
        <Container fluid="lg">
              <h1> {categoryId ? `Estás en la categoría ${categoryId}` : '¡Bienvenidos!'}</h1>
            <ItemList productos={productos}/>
        </Container>
    )
}

export default ItemListContainer