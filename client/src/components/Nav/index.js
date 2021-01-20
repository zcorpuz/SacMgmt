import React, { useState } from 'react';
import {NavItems} from "./NavItems";
import { BrowserRouter, Route } from 'react-router-dom';
import './style.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <BrowserRouter>
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
              <li key={index} className='nav-item'>

                <Route to='/' className={item.class} onClick={closeMobileMenu} href={item.url}>
                {item.label}
                </Route>
              </li>
            )
          })}
        </ul>
      </nav>
    </BrowserRouter>
  );
}

export default Navbar;
