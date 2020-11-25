import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.css';

const Header = ({ isMenuOpened, switchSidebarDisplay }) => {

console.log(isMenuOpened);
const buttonClass = isMenuOpened ? 'times' : 'bars';

  return (
    <div className="header">
      <NavLink className="header__navigation--element main__title" exact to="/">Scenarioz</NavLink>
      <div className="header__navigation">
        <NavLink className="header__navigation--element" exact to="/scenarios">Scénarios</NavLink>
        <NavLink className="header__navigation--element" exact to="/creators">Créateurs</NavLink>
      </div>
      <button type="button" className="sidebar__button" onClick={() => {
        switchSidebarDisplay({
          type: 'CHANGE_DISPLAY'
        });
      }}>
        <i class={`fas fa-${buttonClass}`} />
      </button>
    </div>
  );
};

export default Header;