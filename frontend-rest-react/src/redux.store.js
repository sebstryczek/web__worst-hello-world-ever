import {
  applyMiddleware,
  compose,
  combineReducers,
  createStore,
} from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import { duckEpic, duckReducer } from './components/duck/duck.redux';

const rootReducer = combineReducers({
  duckReducer,
});

const rootEpic = combineEpics(
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
