import { connect } from 'react-redux';
import authActions from './auth.actions';

const mapStateToProps = state => ({
  isAuthenticated: state.authReducer.isAuthenticated,
  token: state.authReducer.token,
});

const mapDispatchToProps = dispatch => ({
  signUp: (email) => dispatch( authActions.signUpRequested() ),
  signIn: (email, password, sourceRoute) => dispatch(
    authActions.signInRequested(email, password, sourceRoute)
  ),
  signOut: () => dispatch( authActions.signOutRequested() ),
});

const authConnector = component => {
  return connect(mapStateToProps, mapDispatchToProps)(component);
}

export default authConnector;
