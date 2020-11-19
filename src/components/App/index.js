import React from 'react';
import './style.css';

import Header from '../Header';
import Footer from '../Footer';

const image = 'https://images.unsplash.com/photo-1605142859862-978be7eba909?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';

const App = () => (
  <div className="app">
    <Header />
    <div className="content__container">
      <div className="content__header" style={{ backgroundImage: `url('${image}')`, backgroundRepeat: `no-repeat`, backgroundSize: `cover`, backgroundPosition: `center` }}>
        <div className="header__text">
          <h1 className="header__title">Scenarioz</h1>
          <p className="header__subtitle">La bibliothèque de scénarios faite par un MJ, pour des MJs.</p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default App;