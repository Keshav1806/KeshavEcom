import React from 'react'
import exclusive_image from './Assets/exclusive_image.png'
const Mainbanner = () => {
    return (
        <>
            <div className="mainbanner">
                <div className="banner">
                <div className="mainleft">
                    <h1>Exclusive </h1>
                    <h1>Offers For You</h1>
                    <p>ONLY ON BEST SELLER PRODUCTS</p>
                    <p className='check'>Check now</p>
                </div>
                <div className="mainright">
                    <img src={exclusive_image} alt="no img" />
                </div>
                </div>
                
            </div>
        </>
    )
}

export default Mainbanner
