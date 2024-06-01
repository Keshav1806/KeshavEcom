import React from 'react'

const CartTotal = ({subtotal}) => {
  return (
    <>
      <div className="totalcart">
        <div className="total">
            <h2>Cart Totals</h2>
            <div className="sec1">
                <p>Subtotal</p>
                <p>${subtotal}</p>   
            </div>
            <hr />
            <div className="sec1">
                <p>Shipping Fee</p>
                <p>Free</p>   
            </div>
            <hr />
            <div className="sec1">
                <p><b>Total</b></p>
                <p><b>${subtotal}</b></p>   
            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="promo">
            <p>if you have a promo code, enter it here</p>
            <div className="submitpromo">
                <input type="text" placeholder='promo code' />
                <button>Submit</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default CartTotal
