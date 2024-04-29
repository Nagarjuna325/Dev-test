import React from 'react';
import './Header.css';


function Header() {
  return (
    <header className="header">
      <div className="search-container">
        {}
        <input
          type="text"
          placeholder="Search"
          className="search-input"
        />
      </div>
    </header>
  );
}

export default Header;
