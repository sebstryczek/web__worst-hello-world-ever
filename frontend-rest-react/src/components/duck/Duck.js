import React from 'react';
import { duckConnector } from './duck.redux/duck.connector';

const Duck = props => (
  <div>
    <button onClick={props.quackRequested}>Poke the duck</button>
    {
      props.quacks.map( (q, i) => <p key={i}>{q}</p> )
    }
  </div>
)

//export default Duck;
export default duckConnector( Duck );
 