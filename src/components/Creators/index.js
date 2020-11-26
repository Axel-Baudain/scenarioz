import React from 'react';
import { Select } from 'semantic-ui-react';
import './style.css';

import SearchBar from '../SearchBar';


const Creators = () => (
  <div className="creators">
    <div className="creators__header">
      <h1 className="creators__title">
        Liste des créateurs
      </h1>
      <div className="creators__searchzone">
        <SearchBar />
      </div>
    </div>
  </div>
);

export default Creators;
