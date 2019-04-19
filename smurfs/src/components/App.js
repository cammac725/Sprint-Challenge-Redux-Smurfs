import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurf } from '../actions';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetchingSmurf: state.fetchingSmurf,
    error: state.error
  }
}

export default connect(mapStateToProps, { getSmurf })(App);
