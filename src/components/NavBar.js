import React from 'react';
import { NavBarItems } from './NavBarItems';
import Pet_Check_Mark from '../../images/Pet_Check_Mark.png';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div><img className="menu-icon" src={Pet_Check_Mark}></img></div>
      <h1 className="navbar-logo">Pet Check</h1>
      <ul className="nav-items">
        {NavBarItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.className} href={item.url}>{item.title}</a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default NavBar;
