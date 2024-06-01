import React from 'react'
import { Link } from 'react-router-dom'
import data_product from './Assets/data';

const Popwomen = () => {
    return (
        <>
            <div className="popwomen">
                <div className="inpopwomen">
                <div className="heading">
                    <h1>POPULAR IN WOMEN<div className="line"></div></h1>
                </div>
                <div className="popcont">
                    {data_product.map((item, index) => (
                         <Link to={`/Productinfo/${item.id}`} style={{textDecoration:"none", color:"black"}}><div key={index} className="popitem" onClick={window.scrollTo(0,0)}>
                            <img src={item.image} alt="no img" />
                            <p>{item.name}</p>
                            <h3>${item.new_price} <span>${item.old_price}</span></h3>
                        </div></Link>
                    ))}
                </div>
                </div>
            </div>
        </>
    )
}

export default Popwomen

