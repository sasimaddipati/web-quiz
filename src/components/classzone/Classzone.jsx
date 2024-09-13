import React from "react";
import { Link, Outlet } from "react-router-dom";
import './Classzone.css'; 

function Classzone() {
  return (
    <div className="container1">
      <ul className="ul">
        <Link to='createzone' className={({ isActive }) => isActive ? 'active' : ''}>
          Create Zone
        </Link>
        <Link to='joinedzone' className={({ isActive }) => isActive ? 'active' : ''}>
          Joined Zone
        </Link>
      </ul>
      <div className="outlet-content">
        <Outlet />
      </div>
    </div>
  );
}

export default Classzone;
