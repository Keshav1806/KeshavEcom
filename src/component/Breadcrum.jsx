import React from 'react'
import breadcrum_arrow from './Assets/breadcrum_arrow.png'

const Breadcrum = ({ name, category }) => {
    return (
        <>
            <div className="bread">
                <p>HOME <img src={breadcrum_arrow} alt="no img" /> SHOP <img src={breadcrum_arrow} alt="no img" /> {category} <img src={breadcrum_arrow} alt="no img" /> {name}</p>
            </div>
        </>
    )
}

export default Breadcrum
