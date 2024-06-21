import React, { useState, useRef, useEffect } from 'react';
import logo from './Assets/logo.png';
import cart_icon from './Assets/cart_icon.png';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

const Navbar = ({ total }) => {
  const [activeLink, setActiveLink] = useState('');
  const [user, setUser] = useState(null);
  const auth = getAuth();
  const navigate = useNavigate();
  const menuref = useRef();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); 
      } else {
        setUser(null); 
      }
    });

    return () => unsubscribe();
  }, [auth]);

  useEffect(() => {
    const storedOption = localStorage.getItem('selectedOption');
    if (storedOption) {
      setActiveLink(parseInt(storedOption)); 
    }
  }, []);

  const handleLinkClick = (index) => {
    setActiveLink(index);
    localStorage.setItem('selectedOption', index);
  };

  const menuhandler = () => {
    menuref.current.classList.toggle("active");
  };

  const logout = () =>{
    signOut(auth);
    navigate("/Login")
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
          {!user && <button onClick={() => navigate("/Login")}>Login</button>}
          {user && <button onClick={logout}>Logout</button>}
        </div>

        <div className="login">
          {!user && <button onClick={() => navigate("/Login")}>Login</button>}
          {user && <button onClick={logout}>Logout</button>}

          <Link to="/Cart">
            <img src={cart_icon} alt="" />
          </Link>
          <div className="count">{total}</div>
          <img className='ham' onClick={menuhandler} src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp" alt="no img" />
        </div>
      </div>
    </>
  );
};

export default Navbar;



// const handleLinkClick = (index) => {
//     setActiveLink(index);
//     localStorage.setItem('selectedOption', index);
// };