import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img src='images/LogoWhite.png' alt="Logo" width="50" height="50"/>
          &nbsp;&nbsp; <big>DriveLEARN</big>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/login' className='nav-links' onClick={closeMobileMenu}>
                Login
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/signup' className='nav-links' onClick={closeMobileMenu}>
                Signup
              </Link>
            </li>
            {/* <li className='nav-item'>
              <Link to='/administrator' className='nav-links' onClick={closeMobileMenu}>
                Admin
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/branchmanager' className='nav-links' onClick={closeMobileMenu}>
                Branch Manager
              </Link>
            </li> */}
          </ul>
          
        </div>
      </nav>
    </>
  );
}

export default Nav;
