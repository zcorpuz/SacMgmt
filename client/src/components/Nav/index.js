import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { NavItems } from "./NavItems";
import './style.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className='NavbarItems'>
      <img
        className="navbar-logo"
        alt="Sacramento Management Company"
        src= {require("./Artboard-1.png")}
      />
      <div className='menu-icon' onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        {NavItems.map((item, index) => {
          return(
            <Link 
              key={index} 
              activeClass="active"
              to={item.url}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeMobileMenu}
              className='nav-item'
            >
              {item.label}
            </Link>
          )
        })}
        <a 
          href="https://sacmgmt.afts.com/"
          offset={-70}
          duration={500}
          onClick={closeMobileMenu}
          className='nav-item'
          id="pay-link"
        >
          Payment Portal
        </a>
      </ul>
    </nav>
  );
}

export default Navbar;
