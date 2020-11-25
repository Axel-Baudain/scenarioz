import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

import './style.css';

const Header = ({ isMenuOpened, switchSidebarDisplay }) => (
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
      <Icon name="content" />
    </button>
  </div>
);

export default Header;