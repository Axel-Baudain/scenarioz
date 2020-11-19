import React from 'react';
import './style.css';

const Header = () => (
  <div className="header">
    <a href="#">Scenarioz</a>
    <div className="header__navigation">
      <a className="header__navigation--element" href="#">Scénarios</a>
      <a className="header__navigation--element" href="#">Créateurs</a>
    </div>
    <a href="#"><i class="fas fa-bars" /></a>
  </div>
);

export default Header;