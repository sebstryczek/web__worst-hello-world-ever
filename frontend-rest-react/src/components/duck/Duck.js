import React from 'react'
import { connect } from 'react-redux';

import { duckActions } from './duck.redux/';

const Duck = props => (
  <div>
    <button onClick={props.quackRequested}>Poke the duck</button>
    {
      props.quacks.map( (q, i) => <p key={i}>{q}</p> )
    }
  </div>
)


const mapStateToProps = state => ({
  quacks: state.duckReducer.quacks,
});

const mapDispatchToProps = dispatch => ({
  quackRequested: () => dispatch(duckActions.quackRequested()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Duck);
