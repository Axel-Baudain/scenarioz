import React from 'react';
import './style.css';

import SearchBar from '../SearchBar';

const Scenarios = () => (
  <div className="scenarios">
    <div className="scenarios__header">
      <h1 className="scenarios__title">
        Liste des scénarios
      </h1>
      <SearchBar />
      {/* research */}
      {/* filter */}
    </div>
  </div>
);

export default Scenarios;
