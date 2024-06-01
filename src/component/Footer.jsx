import React from 'react'
import logo_big from './Assets/logo_big.png'
import pintester_icon from './Assets/pintester_icon.png'
import whatsapp_icon from './Assets/whatsapp_icon.png'
import instagram_icon from './Assets/instagram_icon.png'
const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="logo1">
                    <img src={logo_big} alt="no img" />
                    <p>SHOPPER</p>
                </div>
                <div className="links1">
                    <a href="#">Company</a>
                    <a href="#">Products</a>
                    <a href="#">Offices</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </div>
                <div className="social">
                    <img src={instagram_icon} alt="no img" />
                    <img src={pintester_icon} alt="no img" />
                    <img src={whatsapp_icon} alt="no img" />
                </div>
                <div className="line2"></div>
                <p>Copyright @ 2024 | All Right Reserved.</p>
            </div>
        </>
    )
}

export default Footer
