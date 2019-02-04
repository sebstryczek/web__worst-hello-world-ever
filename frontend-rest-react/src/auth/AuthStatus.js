import React from 'react'
import { withRouter } from 'react-router-dom'

const AuthStatus = withRouter(({ history }) => (
  //authService.isAuthenticated() ? (
  //  <p>
  //    Welcome! <button onClick={() => {
  //      authService.logout(() => history.push('/'))
  //    }}>Sign out</button>
  //  </p>
  //) : (
  //  <p>You are not logged in.</p>
  //)
  <p></p>
));

export default AuthStatus;
