import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <NavLink className='link' to='/'>Home</NavLink>
      <NavLink to='/add'>Add a Smurf</NavLink>
    </div>
  )
}

export default Header;