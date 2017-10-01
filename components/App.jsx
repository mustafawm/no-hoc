import React from 'react';
import { number } from 'prop-types';
import Mouse from './Mouse';

const App = props => (
  <div className="item">
    <b># {props.num}</b>
    <Mouse>
      {mouse => (
        <h3> The mouse is at: ({mouse.x}, {mouse.y}) </h3>
      )}
    </Mouse>
  </div>
);

App.propTypes = {
  num: number.isRequired
};

export default App;
