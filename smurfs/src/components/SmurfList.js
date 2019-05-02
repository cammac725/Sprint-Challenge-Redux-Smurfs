import React from 'react';
import { connect } from 'react-redux';

import { getSmurf } from '../actions';
import Smurf from './Smurf';

class SmurfList extends React.Component {

  componentDidMount() {
    this.props.getSmurf()
  }

  render() {
    return (
      <div>
        {this.props.loading ? <h2>Loading...</h2> : null}
        {this.props.smurfs.map(smurf =>
          <Smurf smurf={smurf} key={smurf.id + smurf.name} />
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error,
    loading: state.loading
  }
}

export default connect(mapStateToProps, { getSmurf })(SmurfList)