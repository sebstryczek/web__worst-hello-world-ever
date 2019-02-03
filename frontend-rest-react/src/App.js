import React from 'react';
import { Link, BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux';

import store from './redux.store';
import Auth from './components/auth/Auth';
import Fetcher from './components/fetcher/Fetcher';
import AuthRoute from './auth/AuthRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Page from './pages/Page';
import './App.css';

const App = () => (
  <Provider store={store}>
    <Auth>
      {({ isAuthenticated, token, signIn }) => (
        <Router>
          <>
            {JSON.stringify(isAuthenticated)}
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/page'>Page</Link></li>
            </ul>
            
            <Route exact path='/' component={Home} />
            <Route path='/login' render={props =>
              <Login {...props} signIn={signIn} />
            }/>
            <AuthRoute exact path='/page' isAuthenticated={isAuthenticated} render={props => (
              <Fetcher url='http://localhost:3333/users/' token={token}>
              {
                ({ data }) => {
                  return <Page {...props} data={data} />
                }
              }
              </Fetcher>
            )} />
          </>
        </Router>
      )}
    </Auth>
  </Provider>
);

export default App;
