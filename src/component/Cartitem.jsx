import React from 'react'
import cart_cross_icon from './Assets/cart_cross_icon.png'

const Cartitem = ({ removeFromCart, cartItems, cart }) => {
    return (
        <>
            <div className="cart">
                <div className="carthead">
                    <p><b>Products</b></p>
                    <p><b>Title</b></p>
                    <p><b>Price</b></p>
                    <p><b>Quanitity</b></p>
                    <p><b>Total</b></p>
                    <p><b>Remove</b></p>
                </div>
                <hr />
                <div className="cartformat">
                    {!(cartItems.length === 0) && cartItems.map((item, index) => (
                        <div className="maincartitem">
                            <div className="cartitem">
                                <img className='prodimage' src={item.image} alt="no img" />
                                <p>{item.name}</p>
                                <p>${item.new_price}</p>
                                <button>{cart[item.id]}</button>
                                <p className='totalprod'>${item.new_price * cart[item.id]}</p>
                                <img onClick={() => removeFromCart(item.id)} className='crossbut' src={cart_cross_icon} alt="no img" />
                            </div>
                            <hr />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Cartitem
