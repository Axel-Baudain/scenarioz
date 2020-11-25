import React from 'react';
import './style.css';

import SearchBar from '../SearchBar';


const Creators = () => (
  <div className="creators">
    <div className="creators__header">
      <h1 className="creators__title">
        Liste des créateurs
      </h1>
      <SearchBar />
      {/* filter */}
    </div>
  </div>
);

export default Creators;
