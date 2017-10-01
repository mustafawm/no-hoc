import React from 'react';
import { func } from 'prop-types';

class Mouse extends React.Component {
  state = { x: 0, y: 0 };

  handleMouseMove = evt => {
    this.setState({
      x: evt.clientX,
      y: evt.clientY
    });
  };

  render() {
    return (
      <span onMouseMove={this.handleMouseMove} >
        {this.props.children(this.state)}
      </span>
    );
  }
}

Mouse.propTypes = {
  children: func.isRequired
};


export default Mouse;
