import axios from 'axios';

export const LOADING = 'LOADING';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS';
export const UPDATE_SMURF_SUCCESS = 'UPDATE_SMURF_SUCCESS';
export const ERROR = 'ERROR';

export const getSmurf = () => dispatch => {
  console.log('fetching')
  dispatch({ type: LOADING });
  return axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log('get: ', res)
      dispatch({
        type: FETCH_SMURF_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => dispatch({
      type: ERROR,
      payload: err
    }))
}

export const addSmurf = newSmurf => dispatch => {
  dispatch({ type: LOADING });
  return axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then(res => dispatch({
      type: ADD_SMURF_SUCCESS,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: ERROR,
      payload: err
    }))
}

export const deleteSmurf = id => dispatch => {
  dispatch({ type: LOADING });
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => dispatch({
      type: DELETE_SMURF_SUCCESS,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: ERROR,
      payload: err
    }))
}

export const updateSmurf = updatedSmurf => dispatch => {
  dispatch({ type: LOADING });
  axios
    .put(`http://localhost:3333/smurfs/${updatedSmurf.id}`, updatedSmurf)
    .then(res => dispatch({
      type: UPDATE_SMURF_SUCCESS,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: ERROR,
      payload: err
    }))
}

