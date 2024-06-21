import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

function Sidebar({ isOpen, closeSidebar }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button onClick={closeSidebar}>Close</button>
      <ul>
        <li>
          <NavLink to="/concept-sequence">Concept Sequence</NavLink>
        </li>
        <li>
          <NavLink to="/language-settings">Language Settings</NavLink>
        </li>
        <li>
          <NavLink to="/lesson-template">Lesson Template</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
