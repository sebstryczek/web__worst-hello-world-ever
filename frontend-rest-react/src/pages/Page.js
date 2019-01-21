import React from 'react';
import { connect } from 'react-redux';

import { duckActions } from '../redux/duck';

const Page = props => (
  <>
    <h1>Page</h1>
    <button onClick={props.quackRequested}>Poke the duck</button>
    {
      props.quacks.map( (q, i) => <p key={i}>{q}</p> )
    }
  </>
);

const mapStateToProps = state => ({
  quacks: state.duckReducer.quacks,
});

const mapDispatchToProps = dispatch => ({
  quackRequested: () => dispatch(duckActions.quackRequested()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
