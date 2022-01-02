import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar sticky-top'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Paul Kindt
          </Link>
          <div id={button} className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to='/projecten' className='nav-links' onClick={closeMobileMenu}>Projecten</Link>
            </li>
            <li className='nav-item'>
              <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>Contact</Link>
            </li>
            <li>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
