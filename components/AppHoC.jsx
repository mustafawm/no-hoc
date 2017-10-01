import React from 'react';
import { shape, number } from 'prop-types';
import Mouse from './Mouse';

// HoC
const withMouse = Component => props => (
  <Mouse>{mouse => <Component {...props} mouse={mouse} />}</Mouse>
);

const App = props => (
  <div className="item">
    <b># {props.num}</b>
    <h3> The mouse is at: ({props.mouse.x}, {props.mouse.y}) </h3>
  </div>
);

App.propTypes = {
  mouse: shape({}).isRequired,
  num: number
};

App.defaultProps = {
  num: ''
};

export default withMouse(App);
