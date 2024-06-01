import React from 'react'
import banner_kids from './Assets/banner_kids.png'
import dropdown_icon from './Assets/dropdown_icon.png'
import all_product from './Assets/all_product';
import { Link } from 'react-router-dom'

const Kids = () => {
  return (
    <>
      <div className="gender">
                <img src={banner_kids} alt="no img" />
                <div className="sort">
                    <p><span>Showing 1-12 </span>out of 36 products</p>
                    <button>Sort by <img src={dropdown_icon} alt="no img" /></button>
                </div>
                <div className="popcont">
                    {all_product.filter(item => item.category === 'Kid').map((item, index) => (
                        <Link to={`/Productinfo/${item.id}`} style={{textDecoration:"none", color:"black"}}><div key={index} className="popitem" onClick={window.scrollTo(0,0)}>
                        <img src={item.image} alt="no img" />
                        <p>{item.name}</p>
                        <h3>${item.new_price} <span>${item.old_price}</span></h3>
                    </div></Link>
                    ))}
                </div>
                <div className="explore">
                    <button >Explore More</button>
                </div>
            </div>
    </>
  )
}

export default Kids
