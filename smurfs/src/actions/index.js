import axios from 'axios';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAIL = 'FETCH_SMURF_FAIL';
export const ADD_SMURF_START = 'ADD_SMURF_START';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAIL = 'ADD_SMURF_FAIL';

export const getSmurf = () => dispatch => {
  // console.log('fetch')
  dispatch({ type: FETCH_SMURF_START });

  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      // console.log('get: ', res.data)
      dispatch({
        type: FETCH_SMURF_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => dispatch({
      type: FETCH_SMURF_FAIL,
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
