import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './style.css';

import Header from '../Header';
import Footer from '../Footer';
import Scenarios from '../Scenarios';
import Creators from '../Creators';

const image = 'https://images.unsplash.com/photo-1605142859862-978be7eba909?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';

const App = () => (
  <div className="app">
    <Header />
    <Switch>
    <Route exact path="/"> 
    <div className="content__container">
      <div className="content__header" style={{ backgroundImage: `url('${image}')`, backgroundRepeat: `no-repeat`, backgroundSize: `cover`, backgroundPosition: `center` }}>
        <div className="header__text">
          <h1 className="header__title">Scenarioz</h1>
          <p className="header__subtitle">La bibliothèque de scénarios, faite par un Maître de Jeux, pour les Maîtres de Jeux.</p>
          <Link ><button>Trouver le scénario parfait</button></Link>
        </div>
      </div>
    </div>
    </Route>
    <Route exact path="/scenarios">
      <Scenarios />
    </Route>
    <Route exact path="/creators">
      <Creators />
    </Route>
    </Switch>
    <Footer />
  </div>
);

export default App;