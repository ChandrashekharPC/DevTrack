import {
  FaHome,
  FaUsers,
  FaProjectDiagram,
  FaTasks,
  FaCog
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

import "./Sidebar.css";

function Sidebar() {

  return (

    <div className="sidebar">

      <h2 className="logo">DevTrack</h2>

      <NavLink to="/dashboard" className="menu-item">
        <FaHome />
        <span>Dashboard</span>
      </NavLink>

      <NavLink to="/users" className="menu-item">
        <FaUsers />
        <span>Users</span>
      </NavLink>

      <NavLink to="/projects" className="menu-item">
        <FaProjectDiagram />
        <span>Projects</span>
      </NavLink>

      <NavLink to="/tasks" className="menu-item">
        <FaTasks />
        <span>Tasks</span>
      </NavLink>

      <NavLink to="/settings" className="menu-item">
        <FaCog />
        <span>Settings</span>
      </NavLink>

    </div>

  );

}

export default Sidebar;