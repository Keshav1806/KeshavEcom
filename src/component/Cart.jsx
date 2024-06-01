import cart_cross_icon from './Assets/cart_cross_icon.png'
import CartTotal from './CartTotal'
import Cartitem from './Cartitem'

const Cart = ({ removeFromCart, cartItems, cart, subtotal }) => {
    return (
        <>
            <Cartitem removeFromCart={removeFromCart} cartItems={cartItems} cart={cart}/>
            <CartTotal subtotal={subtotal}/>
        </>
    )
}

export default Cart
