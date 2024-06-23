import React, { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

function Sidebar({ isOpen, closeSidebar }) {
  const sidebarRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeSidebar();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeSidebar]);

  return (
    <div ref={sidebarRef} className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button onClick={closeSidebar}>Close</button>
      <ul>
        <li>
          <NavLink to="/auth">Login / Create Account</NavLink>
        </li>
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
