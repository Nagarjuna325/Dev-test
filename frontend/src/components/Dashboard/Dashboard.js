

import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import Header from '../common/Header';
import GroupDetails from '../groups/GroupDetails';
import GroupMembers from '../groups/GroupMembers';
import './Dashboard.css'; 

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="content-wrapper">
          <GroupDetails />
          <GroupMembers />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
