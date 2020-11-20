import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.css';

const Header = () => (
  <div className="header">
    <NavLink className="header__navigation--element" to="/">Scenarioz</NavLink>
    <div className="header__navigation">
      <NavLink className="header__navigation--element" to="/scenarios">Scénarios</NavLink>
      <NavLink className="header__navigation--element" to="/creators">Créateurs</NavLink>
    </div>
    <i class="fas fa-bars" />
  </div>
);

export default Header;