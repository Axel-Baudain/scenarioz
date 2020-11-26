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

export default Scenarios;
