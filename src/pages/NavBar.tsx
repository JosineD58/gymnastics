import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "../styles/NavBar.scss";
import HomePage from "./HomePage";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <NavLink className="navlink" to="/">
          Home
        </NavLink>
        <NavLink className="navlink" to="/about">
          About
        </NavLink>
        <NavLink className="navlink" to="/checklists">
          Checklists
        </NavLink>
        <NavLink className="navlink" to="/profile">
          Profile
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
