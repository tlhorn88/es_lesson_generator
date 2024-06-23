import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import './NavBar.css';

function NavBar({ toggleSidebar }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <nav className="navbar">
      <ul className="navBarList">
        <li>
          <input type="search" placeholder="search" />
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
        {user ? (
          <li>
            <span>Welcome, {user.email}</span>
          </li>
        ) : (
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        )}
        <li>
          <button onClick={toggleSidebar}>Settings</button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
