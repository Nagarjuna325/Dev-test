

import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="profile-section">
        <img src="./sidebar/Hephium Profile.jpg" alt="Profile" className="profile-picture" />
        <h3 className="profile-name">Hephi</h3>
        <p className="profile-role">Leader</p>
      </div>
      <div className="search-section">
        <input type="text" placeholder="Search" className="search-input" />
      </div>
      <nav className="navigation">
        <a href="#home" className="nav-link active">
          <span className="icon home-icon"></span>Home
        </a>
        <a href="#tasks" className="nav-link">
          <span className="icon tasks-icon"></span>Tasks
        </a>
        <a href="#requests" className="nav-link">
          <span className="icon requests-icon"></span>Requests
        </a>
        <a href="#groups" className="nav-link">
          <span className="icon groups-icon"></span>Groups
        </a>
        
      </nav>
    </div>
  );
}

export default Sidebar;
