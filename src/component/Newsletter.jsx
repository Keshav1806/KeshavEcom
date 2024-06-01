import React from 'react'

const Newsletter = () => {
    return (
        <>
            <div className="letter">
                <div className="inletter">
                    <h1>Get Exclusive Offers On Your Email</h1>
                    <p>Subscribe to out newsletter and stay updated.</p>
                    <div className="email">
                        <input type="email" placeholder='Your email id'/>
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Newsletter
