import React from 'react';

import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header'
import SignIn from './pages/sign-in/sign-in-sign-up';

import './App.css';



function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
