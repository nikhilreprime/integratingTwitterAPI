import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Login from './scenes/Login/Login';
import Profile from './scenes/Profile/Profile';
import Home from './scenes/Home/Home';
import NotFound from './components/PageNotFound/PageNotFound';

class App extends Component {

  render() {
    return (
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/profile/:id' component={Profile} />
        <Route exact path='/' component={Home} />
        <Route path='*' component={NotFound} />
      </Switch>
    );
  }
}

export default App;
