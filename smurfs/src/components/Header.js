import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/add'>Add a Smurf</NavLink>
    </div>
  )
}

export default Header;