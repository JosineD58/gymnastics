import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/checklists">Checklists</NavLink>
    </div>
  );
};

export default NavBar;
