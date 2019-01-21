import { QUACK_REQUESTED, QUACK_DONE, QUACK_FAILED } from './duck.types';

const quackRequested = () => ({
  type: QUACK_REQUESTED,
});

const quackDone = data => ({
  type: QUACK_DONE,
  payload: data,
});

const quackFailed = error => ({
  type: QUACK_FAILED,
  payload: error,
});

const duckActions = {
  quackRequested,
  quackDone,
  quackFailed,
}

export default duckActions;
