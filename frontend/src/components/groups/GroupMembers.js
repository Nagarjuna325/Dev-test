

import React from 'react';
import './GroupMembers.css';

function GroupMembers() {
  const members = [
    { name: 'Leslie Alexander', role: 'Co-Founder / CEO' },
    { name: 'Michael Foster', role: 'Co-Founder / CTO' },
    
  ];

  return (
    <aside className="group-members">
      <h2>Group Members</h2>
      <ul className="members-list">
        {members.map((member, index) => (
          <li key={index} className="member-item">
            <span className="member-name">{member.name}</span> - <span className="member-role">{member.role}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default GroupMembers;



