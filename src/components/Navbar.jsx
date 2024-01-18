import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/pokemons">Cartoon character</NavLink>
      <NavLink>Character Details</NavLink>
    </div>
  );
};

export default Navbar;
