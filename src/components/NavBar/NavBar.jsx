import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar({ user, setUser }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/about">About Us</Link>
      <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`menu ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/about">About Us</Link></li>
        </ul>
      </div>
      <span>Welcome, {user.name}</span>
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}

