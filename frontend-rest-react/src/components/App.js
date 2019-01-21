import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux';

import store from '../redux/store';
import Home from '../pages/Home';
import Page from '../pages/Page';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
        <>
          <Route exact path='/' component={Home} />
          <Route exact path='/page' component={Page} />
        </>
        </Provider>
      </Router>
    );
  }
}

export default App;
