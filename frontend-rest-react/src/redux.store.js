import {
  applyMiddleware,
  compose,
  combineReducers,
  createStore,
} from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import { authReducer, authEpic } from './components/auth/auth.redux';
import { duckEpic, duckReducer } from './components/duck/duck.redux';

const rootReducer = combineReducers({
  authReducer,
  duckReducer,
});

const rootEpic = combineEpics(
  authEpic,
  duckEpic,
)

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(epicMiddleware),
  ),
);

epicMiddleware.run(rootEpic);

export default store;
