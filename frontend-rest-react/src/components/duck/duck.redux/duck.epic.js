import { ofType } from "redux-observable";
import { mapTo } from 'rxjs/operators';

import duckActions from './duck.actions';
import { QUACK_REQUESTED } from './duck.actionTypes';

const duckEpic = (action$, state$) => action$.pipe(
  ofType(QUACK_REQUESTED),
  mapTo(duckActions.quackDone(['quack', 'quacky', 'quack']))
);

export default duckEpic;
