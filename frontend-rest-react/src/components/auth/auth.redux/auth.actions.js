import { SIGN_IN_REQUESTED, SIGN_IN_DONE, SIGN_IN_FAILED } from './auth.actionTypes';

const signUpRequested = () => ({
  type: '',
});

const signInRequested = (email, password, sourceRoute) => ({
  type: SIGN_IN_REQUESTED,
  payload: { email, password, sourceRoute }
});

const signInDone = payload => ({
  type: SIGN_IN_DONE,
  payload,
});

const signInFailed = error => ({
  type: SIGN_IN_FAILED,
  error,
});

const signOutRequested = () => ({
  type: '',
});

const authActions = {
  signUpRequested,
  signInRequested,
  signInDone,
  signInFailed,
  signOutRequested,
}

export default authActions;
