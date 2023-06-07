import React, { useState } from 'react';
import './App.css';

const Menu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
 

  const menuStyle = {
    display: isMenuOpen ? 'block' : 'none',
  };

  const iconListStyle = {
    boxShadow: isMenuOpen ? '0 0 5px rgba(0, 0, 0, 0.3)' : 'none',
  };

  return (
    <div className="navbar">
      <div className={`burger-icon ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="menu" style={menuStyle} id="menu">
        <ul style={iconListStyle}>
          <li>
            <i className="fas fa-home"></i> Home
          </li>
          <li>
            <i className="fas fa-search"></i> Search
          </li>
          <li>
            <i className="fas fa-credit-card"></i> SecurePay
          </li>
          <li>
            <i className="fas fa-book"></i> Blog
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
