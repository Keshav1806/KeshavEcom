import React, { useState, useRef, useEffect } from 'react'
import logo from './Assets/logo.png'
import cart_icon from './Assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = ({total}) => {
    const [activeLink, setActiveLink] = useState('');
    useEffect(() => {
        console.log("Stored option:", localStorage.getItem('selectedOption'));
        const storedOption = localStorage.getItem('selectedOption');
        if (storedOption) {
            setActiveLink(storedOption);
        }
    }, []);

    const handleLinkClick = (index) => {
        setActiveLink(index);
        localStorage.setItem('selectedOption', index);
    };
    const menuref = useRef();
    const menuhandler = () => {
        menuref.current.classList.toggle("active");
    }
    return (
        <>
            <div className="nav">
                <div className="logo">
                    <img src={logo} alt="no img" />
                    <p>SHOPPER</p>
                </div>
                <div className='links' ref={menuref}>
                    <Link to="/" className={activeLink === 1 ? 'active' : ''} onClick={() => handleLinkClick(1)}>Shop</Link>
                    <Link to="/Men" className={activeLink === 2 ? 'active' : ''} onClick={() => handleLinkClick(2)}>Men</Link>
                    <Link to="/Women" className={activeLink === 3 ? 'active' : ''} onClick={() => handleLinkClick(3)}>Women</Link>
                    <Link to="/Kids" className={activeLink === 4 ? 'active' : ''} onClick={() => handleLinkClick(4)}>Kids</Link>

                    <button>Login</button>
                </div>

                <div className="login">
                    <button>Login</button>
                    <Link to="/Cart">
                        <img src={cart_icon} alt="" />
                    </Link>
                    <div className="count">{total}</div>
                    <img className='ham' onClick={menuhandler} src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp" alt="no img" />
                </div>
            </div>
        </>
    )
}

export default Navbar
