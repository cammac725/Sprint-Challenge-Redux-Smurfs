import React from 'react';
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions';
import { Link } from 'react-router-dom';

const Smurf = ({ smurf, deleteSmurf }) => {

  const clickHandler = () => {
    deleteSmurf(smurf.id)
  }

  return (
    <div className='Smurf' key={smurf.id}>
      <h3>{smurf.name}</h3>
      <strong>{smurf.height} tall</strong>
      <p>{smurf.age} smurf years old</p>
      <button onClick={clickHandler}>Smurf begone!</button>
      <Link to={`/update/${smurf.id}`}>Update Me!</Link>
    </div>
  )
}

const mapStateToProps = () => { };

export default connect(mapStateToProps, { deleteSmurf })(Smurf);