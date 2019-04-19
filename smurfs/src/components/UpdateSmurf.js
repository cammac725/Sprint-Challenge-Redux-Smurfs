import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSmurf } from '../actions'

class UpdateSmurf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    }
  }

  componentDidMount() {
    const { smurfs, match } = this.props
    const smurf = smurfs.find(smurf => smurf.id === Number(match.params.id))
    this.setState(smurf)
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = e => {
    e.preventDefault();
    this.props.updateSmurf(this.state)
    this.setState({
      name: '',
      age: '',
      height: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type='text'
          name='name'
          value={this.state.name}
          placeholder='Name'
          onChange={this.handleChange} />
        <input
          type='text'
          name='age'
          value={this.state.age}
          placeholder='Age'
          onChange={this.handleChange} />
        <input
          type='text'
          name='height'
          value={this.state.height}
          placeholder='Height'
          onChange={this.handleChange} />
        <button type='submit'>Click to Update Smurf</button>

      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, { updateSmurf: updateSmurf })(UpdateSmurf)

