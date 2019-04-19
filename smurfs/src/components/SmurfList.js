import React from 'react';
import { getSmurf } from '../actions';
import { connect } from 'react-redux';

class SmurfList extends React.Component {

  componentDidMount() {
    this.props.getSmurf()
  }

  render() {
    return (
      <div>
        {this.props.fetchingSmurf ? <h2>Loading...</h2> : null}
        {this.props.smurfs.map(smurf =>
          <div key={smurf.id}>
            <h3>Smurf's name: {smurf.name}</h3>
            <p>Smurf's age: {smurf.age}</p>
            <p>Smurf's height: {smurf.height}</p>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error,
    fetchingSmurf: state.fetchingSmurf,
  }
}

export default connect(mapStateToProps, { getSmurf })(SmurfList)