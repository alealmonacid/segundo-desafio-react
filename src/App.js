import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer';
import ItemDetailContainer from './container/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Cart from './container/Cart';
import FinalizarCompra from './container/FinalizarCompra';
function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />}/>
          <Route path='/categoria/:categoryId' element={<ItemListContainer />} />
          <Route path='/producto/:productId' element={<ItemDetailContainer />} />
          <Route path="/checkout" element={<FinalizarCompra/>}></Route>
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
