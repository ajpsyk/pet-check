import React from 'react';
import { NavBarItems } from './NavBarItems';
import Pet_Check_Mark from '../../images/Pet_Check_Mark.png';
import '../styles/NavBar.css';
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar">
      <div><img className="menu-icon" src={Pet_Check_Mark}></img></div>
      <NavLink to="/">
        <h1 className="navbar-logo">Pet Check</h1>
      </NavLink>
      <ul className="nav-items">
        {NavBarItems.map((item, index) => {
          return (
            <li key={index}>
              <NavLink to={item.url} className={item.className}>{item.title}</NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default NavBar;
