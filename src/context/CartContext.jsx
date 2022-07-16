import { useContext, useState, useEffect, createContext } from "react"
import { auth } from "../firebase/config";
import { provider } from "../firebase/config";
import {signInWithPopup} from "firebase/auth";

export const CartContext = createContext()

export const useCartContext =()=>{
    return useContext(CartContext)
}
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [resumen, setResumen] = useState([]);
    const [user, setUser] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [loginStatus, setLoginStatus]=useState(true)
    console.log(cart)
    console.log(resumen)


    useEffect(() => {
        let totalQuantity = 0
        cart.forEach(prod => {
            totalQuantity += prod.quantity
        })
        setTotalQuantity(totalQuantity)
    }, [cart])
  
    const addItem = (productToAdd) => {
    //   if(!isInCart(productToAdd.id)) {
        setCart([...cart, productToAdd])
        setResumen([...cart, productToAdd]);
    //   }
    }

    const deleteItem = (id) => {
        const cartWithoutProduct = cart.filter(prod => prod.id !== id) 
        setCart(cartWithoutProduct)
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }
    const priceToPay = () => {
        return cart.reduce((acc, prod) => acc += (prod.precio * prod.quantity), 0)
    }
    const login = ()=>{
        signInWithPopup(auth, provider)
      .then((re) => {
        console.log(re)
        const resp = {email:re.user.email, NombreCliente: re.user.displayName}
        setUser([resp])
        setLoginStatus(false)
        console.log(resp)
      })
      .catch((error)=>{
        console.log(error)
      }) 
    }

    return (
        <CartContext.Provider value={{ 
            cart,
            setCart,
            resumen,
            setResumen, 
            addItem,
            isInCart,
            priceToPay,
            totalQuantity,
            deleteItem,
            loginStatus,
            user, 
            login
        }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContext