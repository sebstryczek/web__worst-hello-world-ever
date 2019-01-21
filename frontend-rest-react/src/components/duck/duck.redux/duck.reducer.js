import duckInitialState from './duck.initialState';
import { QUACK_REQUESTED, QUACK_DONE, QUACK_FAILED } from './duck.actionTypes';

const duckReducer = (state = duckInitialState, action) => {
  //console.log(action.type);

  switch (action.type) {
    case QUACK_REQUESTED:
      return { ...state };
    
    case QUACK_DONE:
      return {
        ...state,
        quacks: action.payload,
      };

    case QUACK_FAILED:
      return { ...state };
  
    default:
      return { ...state };
  }
};

export default duckReducer;
