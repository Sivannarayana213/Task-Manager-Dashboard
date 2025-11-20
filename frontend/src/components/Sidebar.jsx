import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">⚡ Task Manager</h2>

      <div className="sidebar-menu">
        <Link
          to="/tasks"
          className={`sidebar-item ${location.pathname === "/tasks" ? "active" : ""}`}
        >
          Tasks
        </Link>

        <Link
          to="/logs"
          className={`sidebar-item ${location.pathname === "/logs" ? "active" : ""}`}
        >
          Audit Logs
        </Link>
      </div>
    </div>
  );
}
