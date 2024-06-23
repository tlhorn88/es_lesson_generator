import React, { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import './Sidebar.css';

function Sidebar({ isOpen, closeSidebar }) {
  const sidebarRef = useRef(null);
  const auth = getAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log('User logged out');
      closeSidebar(); // Close the sidebar after logging out
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

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
          <button onClick={handleLogout}>Log Out</button>
        </li>
        <li>
          <NavLink to="/concept-sequence">Concept Sequence</NavLink>
        </li>
        <li>
          <NavLink to="/add-songs">Add Songs</NavLink>
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
