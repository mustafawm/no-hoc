/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import AppHoC from './components/AppHoC';

// context: <Mouse /> is the piece that we want to use in a couple of places
// instead of writing it as a HoC to wrap all components that want to use it
// it's written as a regular component with a render prop

const Grid = () => (
  <div className='container'>
    <App num={1} />
    <App num={2} />
    <App num={3} />
    <App num={4} />
    <App num={5} />
    <App num={6} />
    <App num={7} />
    <App num={8} />
  </div>
);
ReactDOM.render(<Grid />, document.getElementById('react-app'));

// const Grid = () => (
//   <div className='container'>
//     <AppHoC num={1} />
//     <AppHoC num={2} />
//     <AppHoC num={3} />
//     <AppHoC num={4} />
//     <AppHoC num={5} />
//     <AppHoC num={6} />
//     <AppHoC num={7} />
//     <AppHoC num={8} />
//   </div>
// );
// ReactDOM.render(<Grid />, document.getElementById('react-app'));



