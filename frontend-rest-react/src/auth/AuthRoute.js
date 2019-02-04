import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const AuthRoute = ({ render, component: Component, isAuthenticated, ...rest }) => {
  console.log('rerender authRoute', 'isAuthenticated: ', isAuthenticated)
  return (
  <Route {...rest} render={(props) => (
    isAuthenticated
      ? render(props) || <Component {...props} />
      : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
  )} />
)};

export default withRouter(AuthRoute);
