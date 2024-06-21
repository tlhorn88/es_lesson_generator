import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar({ toggleSidebar }) {
  return (
    <nav className="navbar">
      <ul className="navBarList">
        <li>
          <input type="search" placeholder="search"></input>
        </li>
        <li>
          <NavLink to="/browse">Browse Directory</NavLink>
        </li>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/concept-sequence">Concept Sequence</NavLink>
        </li>
        <li>
          <button onClick={toggleSidebar}>Settings</button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
