import React from 'react';
import './Header.css';
// import { ReactComponent as SearchIcon } from './search.jpg'; // Suppose you have an SVG icon

function Header() {
  return (
    <header className="header">
      <div className="search-container">
        {/* <SearchIcon className="search-icon" /> */}
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
