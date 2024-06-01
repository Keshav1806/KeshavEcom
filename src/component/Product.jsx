import React from 'react'
import star_icon from './Assets/star_icon.png'
import star_dull_icon from './Assets/star_dull_icon.png'

const Product = ({ prod, addToCart }) => {
    return (
        <>
            <div className="product">
                <div className="prodleft">
                    <div className="smallimg">
                        <img src={prod.image} alt="no img" />
                        <img src={prod.image} alt="no img" />
                        <img src={prod.image} alt="no img" />
                        <img src={prod.image} alt="no img" />
                    </div>
                    <div className="bigimg">
                        <img src={prod.image} alt="no img" />
                    </div>
                </div>
                <div className="prodright">
                    <h1>{prod.name}</h1>
                    <div className="stars">
                        <img src={star_icon} alt="no img" />
                        <img src={star_icon} alt="no img" />
                        <img src={star_icon} alt="no img" />
                        <img src={star_icon} alt="no img" />
                        <img src={star_dull_icon} alt="no img" />
                        <p>(120)</p>
                    </div>
                    <div className="price">
                        <p><span>${prod.old_price} </span>${prod.new_price}</p>
                    </div>
                    <div className="desc">
                        <p>A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.</p>
                    </div>
                    <div className="size">
                        <p>Select Size</p>
                        <div className="sizes">
                            <button>S</button>
                            <button>M</button>
                            <button>L</button>
                            <button>XL</button>
                            <button>XXL</button>
                        </div>
                    </div>
                    <button onClick={()=> addToCart(prod.id)} className='addcart'>ADD TO CART</button>
                    <p className='cat'><b>Category :</b>{prod.category}, T-Shirt, Crop Top</p>
                    <p className='cat'><b>Tags :</b>Modern, Latest</p>
                </div>
            </div>
        </>
    )
}

export default Product
