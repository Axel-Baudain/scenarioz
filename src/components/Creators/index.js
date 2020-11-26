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
      <div className="filter__container">
        <select>
          <option>-- Classer --</option>
          <option>Choix 1</option>
          <option>Choix 2</option>
        </select>
        <select>
          <option>-- Classer --</option>
          <option>Choix 1</option>
          <option>Choix 2</option>
        </select>
        <select>
          <option>-- Classer --</option>
          <option>Choix 1</option>
          <option>Choix 2</option>
        </select>
      </div>
    </div>
  </div>
);

export default Creators;
