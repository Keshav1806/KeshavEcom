import { useState, useEffect } from 'react'
import './App.css'
import "./assets/css/style.css";
import Shop from './component/Shop';
import Navbar from './component/Navbar'
import Footer from './component/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Kids from './component/Kids';
import Men from './component/Men';
import Women from './component/Women';
import Productinfo from './component/Productinfo';
import Cart from './component/Cart';
import all_product from './component/Assets/all_product';


function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cart, setCart] = useState({});
  const [total, setTotal] = useState(0);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const initialCart = {};
    all_product.forEach(product => {
      initialCart[product.id] = 0;
    });
    setCart(initialCart);
  }, []);

  const addToCart = (productId) => {
    setCart(prevCart => {
      const updatedCart = { ...prevCart };
      if (updatedCart[productId] > 0) {
        updatedCart[productId]++;
      } else {
        updatedCart[productId] = 1;
        const product = all_product.find(p => p.id === productId);
        setCartItems(prevItems => [...prevItems, product]);
      }
      return updatedCart;
    });
    setTotal(prevTotal => prevTotal + 1);
  };
  useEffect(() => {
    let totalamt=0;
    for(const item in cart){
      console.log(item);
      if(cart[item]>0){
        const product = all_product.find(p => p.id === Number(item));
        totalamt+= product.new_price* cart[item];
      }
    }
    setSubtotal(totalamt);
  }, [cart]);

  const removeFromCart = (productId) => {
    const quantity = cart[productId];
    setTotal(prevTotal => prevTotal - quantity);
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    setCart(prevCart => {
      const updatedCart = { ...prevCart };
      updatedCart[productId] = 0;
      return updatedCart;
    });
  };

  return (
    <>
      <Router>
        <Navbar total={total} />
        <hr />
        <Routes>
          <Route exact path="/" element={<Shop />}></Route>
          <Route exact path="/Men" element={<Men />}></Route>
          <Route exact path="/Women" element={<Women />}></Route>
          <Route exact path="/Kids" element={<Kids />}></Route>
          <Route exact path="/Cart" element={<Cart subtotal={subtotal} removeFromCart={removeFromCart} cart={cart} cartItems={cartItems} />}></Route>
          <Route path="/Productinfo/:productId" element={<Productinfo addToCart={addToCart} />}></Route>
        </Routes>
        <Footer />
      </Router >
    </>
  )
}

export default App
