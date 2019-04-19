import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurf } from '../actions';

import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.getSmurf();
  }

  render() {
    console.log('smurfs: ', this.props.smurfs)
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>
          {this.props.fetchingSmurf ? <h2>Loading...</h2> : null}
          {this.props.smurfs.map(smurf =>
            <div key={smurf.id}>
              <h3>{smurf.name}</h3>
              <p>{smurf.age}</p>
              <p>{smurf.height}</p>
            </div>
          )}
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurf: state.fetchingSmurf,
    error: state.error
  }
}

export default connect(mapStateToProps, { getSmurf })(App);
