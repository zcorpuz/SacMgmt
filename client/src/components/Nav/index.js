import React, {Component} from "react";
import {NavItems} from "./NavItems";
import "./style.css";

class Nav extends Component {
  state = { clicked: false}

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked})
  }

  render() {
    return (
      <nav className="NavbarItems">
        <img
          className="navbar-logo"
          alt="Sacramento Management Company"
          src= {require("./Artboard-1.png")}
        />
        <div className= "menu-icon" onClick={this.handleClick}>
        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className= {this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {NavItems.map((item, index) => {
            return(
              <li key={index}>
                <a className={item.class} href={item.url}>{item.label}</a>
              </li>
            )
          })}
        </ul>
      </nav>
    );
  }
  
}

export default Nav;
