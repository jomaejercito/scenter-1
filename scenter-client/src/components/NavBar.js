import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="ui menu">
      <NavLink to="/">
        <span className="header item">Home</span>
      </NavLink>
      <NavLink to="/brands">
        <span className="header item">Brands</span>
      </NavLink>
      <NavLink to="/top">
        <span className="header item">Most Popular Scents</span>
      </NavLink>    
    </div>  
  )
}

export default NavBar;