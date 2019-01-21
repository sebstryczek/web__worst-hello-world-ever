import { ofType } from "redux-observable";
import { mapTo } from 'rxjs/operators';

import duckActions from './duck.actions';
import { QUACK_REQUESTED } from './duck.actionTypes';

/*
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, map, catchError, mapTo } from 'rxjs/operators';
import { fetchColorsDone, fetchColorsFailed } from './colorsActions';
export default (action$, state$, { getJSON } = ajax) => action$.pipe(
  ofType(FETCH_COLORS_REQUESTED),
  mergeMap(() => getJSON('http://www.mocky.io/v2/5a37a7403200000f10eb6a2d')
    .pipe(
      map(response => fetchColorsDone(response)),
      catchError(error => of(fetchColorsFailed(error))),
    )),
);
*/

const duckEpic = (action$, state$) => action$.pipe(
  ofType(QUACK_REQUESTED),
  mapTo(duckActions.quackDone(['quack', 'quacky', 'quack']))
);

export default duckEpic;
