import axios from 'axios';

export const LOADING = 'LOADING';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
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

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
