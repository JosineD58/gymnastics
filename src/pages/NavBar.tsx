import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "../styles/NavBar.scss";

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink className="navlink" to="/">
        Home
      </NavLink>
      <NavLink className="navlink" to="/about">
        About
      </NavLink>
      <NavLink className="navlink" to="/checklists">
        Checklists
      </NavLink>
    </div>
  );
};

export default NavBar;
