import { connect } from 'react-redux';
import { duckActions } from './duck.actions';

const mapStateToProps = state => ({
  quacks: state.duckReducer.quacks,
});

const mapDispatchToProps = dispatch => ({
  quackRequested: () => dispatch(duckActions.quackRequested()),
});

const duckConnector = component => {
  return connect(mapStateToProps, mapDispatchToProps)(component);
}

export default duckConnector;
