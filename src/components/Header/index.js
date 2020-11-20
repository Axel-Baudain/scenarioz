import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.css';

const Header = () => (
  <div className="header">
    <NavLink className="header__navigation--element" exact to="/">Scenarioz</NavLink>
    <div className="header__navigation">
      <NavLink className="header__navigation--element" exact to="/scenarios">Scénarios</NavLink>
      <NavLink className="header__navigation--element" exact to="/creators">Créateurs</NavLink>
    </div>
    <i class="fas fa-bars" />
  </div>
);

export default Header;