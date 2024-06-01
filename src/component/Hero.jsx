import React from 'react'
import hero from './Assets/hero_image.png'
import hand from './Assets/hand_icon.png'
import arrow from './Assets/arrow.png'
const Hero = () => {
    return (
        <>
            <div className="hero">
                <div className="heroleft">
                    <p>NEW ARRIVALS ONLY</p>
                    <h1>New <img src={hand} alt="no img" /></h1>
                    <h1>Collections</h1>
                    <h1>For everyone</h1>
                    <div className="collection">
                        <p className='latestcoll'>Latest Collection <img src={arrow} alt="no img" /></p>
                    </div>

                </div>
                <div className="heroright">
                    <img src={hero} alt="no img" />
                </div>
            </div>
        </>
    )
}

export default Hero
