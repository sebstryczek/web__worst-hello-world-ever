import authInitialState from './auth.initialState';
import {
  SIGN_IN_REQUESTED,
  SIGN_IN_DONE,
  SIGN_IN_FAILED,
} from './auth.actionTypes';

const authReducer = (state = authInitialState, action) => {
  console.log(action.type)

  switch (action.type) {
    case SIGN_IN_REQUESTED: {
      const { sourceRoute } = action.payload;
      return { ...state, sourceRoute };
    }
    
    case SIGN_IN_DONE: {
      const { token } = action.payload;
      console.log(state)
      return { ...state, token, isAuthenticated: true };
    }
    
    case SIGN_IN_FAILED: {
      console.log(action.error)
      return { ...state };
    }
    
    default:
      return { ...state };
  }
};

export default authReducer;
