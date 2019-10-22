import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="ui menu">
      <NavLink to="/brands">
        <span className="header item">Brands</span>
      </NavLink>      
    </div>  
  )
}

export default NavBar;