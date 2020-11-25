import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const HomePage = () => (
  <div className="content__home">
    <div className="home__text">
      <h1 className="home__title">Scenarioz</h1>
      <p className="home__subtitle">La bibliothèque de scénarios, faite par un Maître de Jeux, pour les Maîtres de Jeux.</p>
      <Link to="/scenarios" className="home__button">Trouver le scénario parfait</Link>
    </div>
  </div>
);

export default HomePage;
