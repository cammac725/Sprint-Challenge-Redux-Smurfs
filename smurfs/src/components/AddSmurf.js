import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions'

class AddSmurf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    }
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = e => {
    e.preventDefault();
    this.props.addSmurf(this.state)
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
        <button type='submit'>Click to Add Smurf</button>

      </form>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps, { addSmurf: addSmurf })(AddSmurf)