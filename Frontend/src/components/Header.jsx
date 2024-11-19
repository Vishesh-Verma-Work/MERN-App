//header.jsx
import React from "react";
import "../styles/header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header-container">
      <div className="left">
        <NavLink to="/" style={{ color: "white", textDecoration: "none" }}>
          <h1 className="app-name">NoteHub</h1>
        </NavLink>
      </div>
      <div className="center">
        <input
          type="text"
          className="search-bar"
          placeholder="Search Notes..."
        />
      </div>
      <div className="right">
        <NavLink to={"/api/notes"}>
          <button className="my-notes-btn">My Notes</button>
        </NavLink>
        <div className="dropdown">
          <button className="dropdown-btn">Vishesh Verma</button>
          <div className="dropdown-content">
            <a href="/profile">My Profile</a>
            <a href="/logout">Logout</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
