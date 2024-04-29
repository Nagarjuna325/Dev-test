import React from 'react';
import './GroupDetails.css';

function GroupDetails() {
  return (
    <div className="group-details-container">
      <div className="group-details-card">
        <h1 className="group-name">Group Name</h1>
        <p className="group-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="placeholder-card"></div>
      <div className="placeholder-card"></div>
    </div>
  );
}

export default GroupDetails;
