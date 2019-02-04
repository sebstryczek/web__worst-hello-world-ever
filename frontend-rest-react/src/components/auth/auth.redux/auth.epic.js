import { ofType, combineEpics } from "redux-observable";
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, map, catchError } from 'rxjs/operators';

import authActions from './auth.actions';
import { SIGN_IN_REQUESTED, SIGN_IN_DONE } from './auth.actionTypes';


const signInRequestedEpic = (action$, state$, { post } = ajax) => {
  return action$.pipe(
    ofType(SIGN_IN_REQUESTED),
    mergeMap(action => post('http://localhost:3333/auth/signIn', { ...action.payload })
      .pipe(
        map(
          result => {
            localStorage.setItem('token', result.response.token);
            return authActions.signInDone(result.response);
          }
        ),
        catchError(
          error => of(authActions.signInFailed({
            code: error.status,
            message: error.response.error,
          }))
        ),
      )
    )
  )
};

const signInDoneEpic = (action$, state$, { post } = ajax) => {
  return action$.pipe(
    ofType(SIGN_IN_DONE),
    () => console.log('sdadas')
  )
};

export default combineEpics(
  signInRequestedEpic,
);
